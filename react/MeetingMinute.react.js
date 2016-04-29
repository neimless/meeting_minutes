var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var MeetingMinute = React.createClass({

	propTypes: {
		minute: ReactPropTypes.object.isRequired
	},

	render: function() {
		var minute = this.props.minute;

		return (
			<div className="row">
				<div className="col-md-6"><p>Item number {minute.id}</p></div>
				<div className="col-md-6"><button className="btn btn-default" onClick={this.remButtonClick}>Remove</button></div>
			</div>
		);		
	},

	remButtonClick: function() {
		MeetingActions.removeMinute(this.props.minute.id);
	}
});

module.exports = MeetingMinute;