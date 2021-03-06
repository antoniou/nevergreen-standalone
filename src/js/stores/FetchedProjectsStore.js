var AppDispatcher = require('../dispatcher/AppDispatcher')
var EventEmitter = require('events').EventEmitter
var eventEmitter = new EventEmitter()
var _ = require('lodash')
var Constants = require('../constants/NevergreenConstants')

var CHANGE_EVENT = 'projects-change'

var _projects = {}

function previouslyRemovedProjects(project) {
  return !project.wasRemoved
}

function updateNewAndRemovedFlags(fetchedProjects, project) {
  var whereIdsMatch = function (fetchedProject) {
    return fetchedProject['project-id'] === project.id
  }
  return {
    id: project.id,
    name: project.name,
    isNew: false,
    wasRemoved: _.findIndex(fetchedProjects, whereIdsMatch) < 0
  }
}

function getName(project) {
  return project.stage ? project.name + ' [' + project.stage + ']' : project.name
}

function toProject(project) {
  return {
    id: project['project-id'],
    name: getName(project),
    isNew: true,
    wasRemoved: false
  }
}

function removeJobs(project) {
  return _.isNull(project.job)
}

function removeExisting(previousProjects, project) {
  var whereIdsMatch = function (previousProject) {
    return previousProject.id === project.id
  }
  return _.findIndex(previousProjects, whereIdsMatch) < 0
}

function createProjects(previousProjects, fetchedProjects) {
  return previousProjects
    .filter(previouslyRemovedProjects)
    .map(updateNewAndRemovedFlags.bind(this, fetchedProjects))
    .concat(fetchedProjects
      .filter(removeJobs)
      .map(toProject)
      .filter(removeExisting.bind(this, previousProjects)))
}

var dispatchToken = AppDispatcher.register(function (action) {
  switch (action.type) {
    case Constants.TrayAdd:
    {
      _projects[action.id] = []
      break
    }
    case Constants.TrayRemove:
    {
      delete _projects[action.id]
      break
    }
    case Constants.ProjectsFetched:
    {
      _projects[action.id] = createProjects(_projects[action.id], action.projects)
      break
    }
    default :
    {
      return true
    }
  }

  eventEmitter.emit(CHANGE_EVENT)
  return true
})

module.exports = {
  dispatchToken: dispatchToken,

  getAll: function (trayId) {
    return _projects[trayId] || []
  },

  addListener: function (callback) {
    eventEmitter.on(CHANGE_EVENT, callback)
  },

  removeListener: function (callback) {
    eventEmitter.removeListener(CHANGE_EVENT, callback)
  }
}
