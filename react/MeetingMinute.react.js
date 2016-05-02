var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingStore = require('../js/MeetingStore');
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var MeetingMinute = React.createClass({

	propTypes: {
		minute: ReactPropTypes.object.isRequired,
		order: ReactPropTypes.number.isRequired
	},

	getInitialState: function() {
	    return {
	      editing: false
	    };
  	},

	render: function() {
		var textfield = this.props.minute.text;
		var firstButton = <button className="btn btn-default" onClick={this.editButtonClick}>Edit</button>;
		var secondButton = <button className="btn btn-default" onClick={this.remButtonClick}>Remove</button>;
		if (this.state.editing) {
			textfield = <textarea className="form-control" rows="5" defaultValue={this.props.minute.text} ref="minuteText"></textarea>;
			firstButton = <button className="btn btn-default" onClick={this.saveButtonClick}>Save</button>;
			secondButton = <button className="btn btn-default" onClick={this.editButtonClick}>Cancel</button>;
		}	

		return (
			<div className="row">
				<div className="col-md-1">{this.props.order}</div>
				<div className="col-md-1">{this.props.minute.topic}</div>
				<div className="col-md-8">{textfield}</div>
				<div className="col-md-1">{firstButton}</div>
				<div className="col-md-1">{secondButton}</div>
			</div>
		);		
	},

	remButtonClick: function() {
		MeetingActions.removeMinute(this.props.minute.id);
	},

	editButtonClick: function() {
		this.state.editing = !this.state.editing;
		MeetingStore.emitChange();
	},

	saveButtonClick: function() {
		this.state.editing = !this.state.editing;
		MeetingActions.editMinute(this.refs.minuteText.value, this.props.minute.id);
	}
});

module.exports = MeetingMinute;