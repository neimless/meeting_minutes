var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingStore = require('../js/MeetingStore');
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var ParticipantForm = React.createClass({

	propTypes: {
		meeting: ReactPropTypes.object.isRequired
	},

	getInitialState: function() {
	    return {
	      valid: true
	    };
	  },

	render: function() {
		var inputClass = 'col-md-3';
		if (!this.state.valid) inputClass += ' has-error';

		return (	
			<div className="row">
		    	<div className="col-md-1"><label>Name</label></div>
		    	<div className={inputClass}><input type="text" className="form-control" ref="participantName" /><span className="text-danger" ref="participantNameValidationError"></span></div>
		    	<div className="col-md-4"><button className="btn btn-success" onClick={this.addParticipantClick}>Add Participant</button></div>
	    	</div>
	    	
		);		
	},

	emptyValidation: function() {
		if (this.refs.participantName.value == null || this.refs.participantName.value == '') {			
			this.refs.participantNameValidationError.innerHTML = 'Name is required';
			return false;
		}
		return true;
	},

	existingValidation: function() {
		for (key in this.props.meeting.participants) {
			if (this.props.meeting.participants[key] == this.refs.participantName.value) {
				this.refs.participantNameValidationError.innerHTML = 'Duplicate name found from list';
				return false;
			}
		}
		return true;
	},

	addParticipantClick: function() {
		this.state.valid = true;
		if (this.emptyValidation() && this.existingValidation()) {
			this.refs.participantNameValidationError.innerHTML = '';
			MeetingActions.addParticipant(this.refs.participantName.value);
		} else {
			this.state.valid = false;    	
			MeetingStore.emitChange();
		}		
    }
});

module.exports = ParticipantForm;