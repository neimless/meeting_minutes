var React = require('react');
var MeetingStore = require('../js/MeetingStore');

function getMeetingState() {
	return {
		allMinutes: MeetingStore.getAllMinutes()
	}
}

var MeetingApp = React.createClass({
	
	getInitialState: function() {
		return getMeetingState();
	},

	componentDidMount: function() {
	    MeetingStore.addChangeListener(this._onChange);
	  },

  	componentWillUnmount: function() {
    	MeetingStore.removeChangeListener(this._onChange);
  	},

	render: function() {
		return (
			<div>
			<p>Test</p>
			</div>
		);
	},

	_onChange: function() {
    this.setState(getMeetingState());
  }
});

module.exports = MeetingApp;