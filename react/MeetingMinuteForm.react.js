var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingStore = require('../js/MeetingStore');
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var MeetingMinuteForm = React.createClass({

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
		    	<div className="col-md-1"><label>Topic</label></div>
		    	<div className={inputClass}><input type="text" className="form-control" ref="minuteTopic" /><span className="text-danger" ref="minuteTopicValidationError"></span></div>
		    	<div className="col-md-4"><button className="btn btn-primary" onClick={this.addButtonClick}>Add new meeting minute</button></div>
	    	</div>	    	
		);		
	},

	emptyValidation: function() {
		if (this.refs.minuteTopic.value == null || this.refs.minuteTopic.value == '') {			
			this.refs.minuteTopicValidationError.innerHTML = 'Topic is required is required';
			return false;
		}
		return true;
	},

    addButtonClick: function() {
    	this.state.valid = true;    	
    	if (this.emptyValidation()) {
			this.refs.minuteTopicValidationError.innerHTML = '';
			MeetingActions.addMinute(this.refs.minuteTopic.value);
		} else {
			this.state.valid = false;    	
			MeetingStore.emitChange();
		}
    }
});

module.exports = MeetingMinuteForm;