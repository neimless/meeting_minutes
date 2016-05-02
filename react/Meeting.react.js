var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var MeetingMinute = require('./MeetingMinute.react');
var MeetingMinuteForm = require('./MeetingMinuteForm.react');
var Participant = require('./Participant.react');
var ParticipantForm = require('./ParticipantForm.react');
var classNames = require('classnames');

var Meeting = React.createClass({
	propTypes: {
		meeting: ReactPropTypes.object.isRequired
	},

	render: function() {

		var minuteRows = [];
		var participantsRows = [];
		var orderingNumber = 0;

		for (key in this.props.meeting.minutes) {
			orderingNumber++;
			minuteRows.push(<MeetingMinute key={key} minute={this.props.meeting.minutes[key]} order={orderingNumber} />);
		}

		for (key in this.props.meeting.participants) {
			participantsRows.push(<Participant key={key} participant={this.props.meeting.participants[key]} />);
		}

		return (
			<div className="tab-content">
				<div role="tabpanel" className="tab-pane active" id="overview-tab">
			    	overview
			    </div>
			    <div role="tabpanel" className="tab-pane" id="participants-tab">
			    	<ParticipantForm meeting={this.props.meeting} />	
			    	<br/>		    	
		    		{participantsRows}
			    </div>
			    <div role="tabpanel" className="tab-pane" id="minutes-tab">
					<MeetingMinuteForm meeting={this.props.meeting} />
					<br/>
			    	{minuteRows}
			    </div>			    
		  	</div>
		);
	},

    addButtonClick: function() {
    	MeetingActions.addMinute();
    }
});

module.exports = Meeting;