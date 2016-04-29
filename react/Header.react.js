var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var Header = React.createClass({
	propTypes: {
		meeting: ReactPropTypes.object.isRequired
	},

	render: function() {
		var actionButton;
		if (this.props.meeting.state === 'NOTSTARTED') {
			actionButton = <div className="col-md-8"><button className="btn btn-default" type="submit" onClick={this.startButtonClick}>Start meeting</button></div>;
		}

		var navigationTabs;
		if (this.props.meeting.state === 'INPROGRESS') {
			actionButton = <ul className="nav nav-tabs" role="tablist">
							    <li role="presentation" className="active"><a href="#general-tab" role="tab" data-toggle="tab">General</a></li>
							    <li role="presentation"><a href="#participants-tab" role="tab" data-toggle="tab">Participants</a></li>
							    <li role="presentation"><a href="#minutes-tab" role="tab" data-toggle="tab">Minutes</a></li>
							    <li role="presentation"><a href="#overview-tab" role="tab" data-toggle="tab">Overview</a></li>
						  	</ul>;
		}

		return (
			<header className="page-header container">
				<div className="row">
					<div className="col-md-4"><h1>Meeting minutes</h1></div>
					{actionButton}
					{navigationTabs}
				</div>				
			</header>
		);
	},

	startButtonClick: function() {
    	MeetingActions.create();
    }
});

module.exports = Header;