var React = require('react')
var Router = require('react-router')

var Link = Router.Link

var MenuItem = React.createClass({
  render: function () {
    return (
      <li>
        <Link id={this.props.id} to={this.props.id} className='navigation-list-item'>
          <span className={'navigation-list-item-icon ' + this.props.iconClass}></span>
          <span className='navigation-list-item-title'>{this.props.title}</span>
        </Link>
      </li>
    )
  }
})

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      items: [
        {id: 'monitor', iconClass: 'eye', title: 'Monitor'},
        {id: 'tracking', iconClass: 'drawer2', title: 'Tracking'},
        {id: 'success', iconClass: 'checkmark', title: 'Success'},
        {id: 'help', iconClass: 'question', title: 'Help'}
      ]
    }
  },

  render: function () {
    return (
      <div>
        <nav role='navigation' className='navigation'>
          <h2 className='visually-hidden'>Navigation</h2>

          <img src='img/buildcanaries-logo.png' className='header-logo' alt='Build Canaries logo'/>

          <ul className='navigation-list'>
            {
              this.props.items.map(function (item) {
                return <MenuItem key={item.id} id={item.id} iconClass={'icon-' + item.iconClass} title={item.title}/>
              }.bind(this))
            }
          </ul>
        </nav>
        <footer role='contentinfo' className='content-info'>
          <a href='https://github.com/build-canaries/nevergreen/releases' target='_blank' className='version'>
            <p id='version-number'>v0.8.0-alpha</p>

            <p id='version-name'>Heat Wave</p>
          </a>
        </footer>
      </div>
    )
  }
})
