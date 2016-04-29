var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var MeetingMinute = require('./MeetingMinute.react');
var classNames = require('classnames');

var Meeting = React.createClass({
	propTypes: {
		meeting: ReactPropTypes.object.isRequired
	},

	render: function() {

		var minuteRows = [
			<div className="row">
					<div className="col-md-4"><p>Item list</p></div>
					<div className="col-md-8"><button className="btn btn-default" type="submit" onClick={this.addButtonClick}>Add minute</button></div>
			</div>
		];
		var minutes = this.props.meeting.minutes;

		for (key in minutes) {
			minuteRows.push(<MeetingMinute key={key} minute={minutes[key]} />);
		}

		return (
			<div className="tab-content">
			    <div role="tabpanel" className="tab-pane active" id="general-tab">
			    	general
			    </div>
			    <div role="tabpanel" className="tab-pane" id="participants-tab">
			    	participants
			    </div>
			    <div role="tabpanel" className="tab-pane" id="minutes-tab">
			    	{minuteRows}
			    </div>
			    <div role="tabpanel" className="tab-pane" id="overview-tab">
			    	overview
			    </div>
		  	</div>
		);
	},

	addButtonClick: function() {
    	MeetingActions.addMinute();
    }
});

module.exports = Meeting;