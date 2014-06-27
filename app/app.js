import React from 'github:reactjs/react-bower/react';
import ReactRouter from 'github:toranb/toranb-react-nested-router-npm-style/main';

var Link = ReactRouter.Link;

export default React.createClass({
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.ul(null, 
          React.DOM.li(null, Link( {to:"session", sessionId:"123", query:{showSpeaker: true}}, "introduction to react")),
          React.DOM.li(null, Link( {to:"session", sessionId:"456"}, "protip: use ember.js"))
        ),
        this.props.activeRoute
      )
    );
  }
});
