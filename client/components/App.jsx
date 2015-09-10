App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})


/**
 * @fileoverview
 * This is the entry point for the app.  Based on the route (either /driver or
 * /rider), it will render the correct layout


import React      from 'react'
import reactMixin from 'react-mixin'

/**
 * The root of the app UI.
 *
 * @class Root
 * @extends {React.Component}
 *
class Root extends React.Component {
    render() {
        return (
            <div className="scene-container">
            </div>
        )
    }

    getMeteorData() {
        return {
            layout: layouts[Session.get('layout')]
        }
    }
}
reactMixin(Root.prototype, ReactMeteorData)

Meteor.startup(function() {
    // create the root of the app UI in the <body>.
    React.render(<Root />, document.body)
})*/
