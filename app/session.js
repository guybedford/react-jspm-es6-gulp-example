import React from 'npm:react/react';
import ReactRouter from 'npm:react-nested-router/modules/main';

var sessions = [
    {id: "123", name: "introduction to react", speaker: "toran billups"},
    {id: "456", name: "protip: use ember.js", speaker: "rob becker"}
];

export default React.createClass({
  render: function() {
    var speakerName = "wat";
    var sessionId = this.props.params.sessionId;
    var session = sessions.filter(function(session) {
        return session.id === sessionId;
    })[0];
    if (this.props.query.showSpeaker) {
        speakerName = session.speaker;
    }else{
        speakerName = "(hidden)";
    }
    return (
      React.DOM.div( {className:"Session"}, 
        React.DOM.h2(null, "Session: ", session.name),
        React.DOM.h3(null, "Speaker: ", speakerName)
      )
    );
  }
});
