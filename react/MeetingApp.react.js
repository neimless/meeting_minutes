var React = require('react');
var MeetingStore = require('../js/MeetingStore');
var Header = require('./Header.react');
var Meeting = require('./Meeting.react');
var classNames = require('classnames');

function getMeetingState() {
	return {
		meeting: MeetingStore.getMeeting()
	};
};

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

		var activeMeeting;
		if (this.state.meeting.state === 'INPROGRESS') {
			activeMeeting = <Meeting meeting={this.state.meeting} />;
		}

		return (
			<div>
				<Header meeting={this.state.meeting} />
				<div className="container">
					{activeMeeting}
				</div>
			</div>
		);
	},

	_onChange: function() {
    	this.setState(getMeetingState());
	}   
});

module.exports = MeetingApp;