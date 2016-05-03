var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var MeetingMinute = require('./MeetingMinute.react');
var MeetingMinuteForm = require('./MeetingMinuteForm.react');
var Participant = require('./Participant.react');
var ParticipantForm = require('./ParticipantForm.react');
var Overview = require('./Overview.react');
var classNames = require('classnames');

var Meeting = React.createClass({
	propTypes: {
		meeting: ReactPropTypes.object.isRequired
	},

	render: function() {

		var orderingNumber = 0;

		var minuteRows = this.props.meeting.minutes.map(function(minute) {
			orderingNumber++;
			return <MeetingMinute key={minute.id} minute={minute} order={orderingNumber} />;
		});

		var participantsRows = this.props.meeting.participants.map(function(part) {
			return <Participant key={part} participant={part} />
		});

		return (
			<div className="tab-content">
				<div role="tabpanel" className="tab-pane" id="overview-tab">
			    	<Overview meeting={this.props.meeting} />
			    </div>
			    <div role="tabpanel" className="tab-pane active" id="participants-tab">
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