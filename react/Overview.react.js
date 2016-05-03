var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var Overview = React.createClass({

	propTypes: {
		meeting: ReactPropTypes.object.isRequired
	},

	render: function() {

		var orderingNumber = 0;
		var minuteRows = this.props.meeting.minutes.map(function(minute) {
			orderingNumber++;
			return (<div className="row">
						<div className="col-md-3"><b>{orderingNumber}.</b> {minute.topic}</div>
						<div className="col-md-9">{minute.text}</div>
					</div>);
		});

		var participantsRows = this.props.meeting.participants.map(function(part) {
			return (<div className="row"><div className="col-md-10 col-md-offset-1">{part}</div></div>);
		});

		return (
			<div>
				<div className="row">
					<div className="col-md-12"><h4>Participant</h4></div>					
				</div>
				{participantsRows}
				<div className="row">
					<div className="col-md-12"><h4>Minutes</h4></div>					
				</div>
				{minuteRows}
			</div>
		);		
	}
});

module.exports = Overview;