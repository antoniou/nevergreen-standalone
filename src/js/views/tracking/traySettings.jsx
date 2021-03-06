var React = require('react/addons')
var _ = require('lodash')

module.exports = React.createClass({
  propTypes: {
    tray: React.PropTypes.object.isRequired,
    removeTray: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <section className='tray-settings'>
        <table className='tray-settings-table'>
          <tbody>
          <tr>
            <td className='tray-settings-table-heading'>uses auth?</td>
            <td>{_.trim(this.props.tray.username) === '' ? 'no' : 'yes'}</td>
          </tr>
          </tbody>
        </table>

        <div className='tray-settings-danger-zone'>
          <h4 className='tray-settings-danger-zone-title'>Danger Zone</h4>

          <div className='tray-settings-danger-zone-content'>
            <button className='button tray-settings-danger-button' onClick={this.removeTray}>Delete this tray</button>
            <span>Once you delete a tray, there is no going back. Please be certain.</span>
          </div>
        </div>
      </section>
    )
  },

  removeTray: function () {
    this.props.removeTray(this.props.trayId)
  }
})
