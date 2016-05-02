var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var Participant = React.createClass({

	propTypes: {
		participant: ReactPropTypes.string.isRequired
	},

	render: function() {
		var participant = this.props.participant;

		return (
			<div className="row">
				<div className="col-md-6"><p>{participant}</p></div>
				<div className="col-md-6"><button className="btn btn-default" onClick={this.remButtonClick}>Remove</button></div>
			</div>
		);		
	},

	remButtonClick: function() {
		MeetingActions.removeParticipant(this.props.participant);
	}
});

module.exports = Participant;