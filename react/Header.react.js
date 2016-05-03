var React = require('react');
var ReactPropTypes = React.PropTypes;
var MeetingActions = require('../js/MeetingActions');
var classNames = require('classnames');

var Header = React.createClass({
	propTypes: {
		meeting: ReactPropTypes.object.isRequired
	},

	render: function() {
		var title = <div className="col-md-4"><h1>Meeting minutes</h1></div>;
		var date = <div className="col-md-2"><h2></h2></div>;

		var actionButton;
		if (this.props.meeting.state === 'NOTSTARTED') {
			actionButton = <div className="col-md-8"><button className="btn btn-success" type="submit" onClick={this.startButtonClick}>Start meeting</button></div>;
		}

		var navigationTabs;
		if (this.props.meeting.state === 'INPROGRESS') {
			actionButton = <ul className="nav nav-tabs" role="tablist">								
							    <li role="presentation" className="active"><a href="#participants-tab" role="tab" data-toggle="tab">Participants</a></li>
							    <li role="presentation"><a href="#minutes-tab" role="tab" data-toggle="tab">Minutes</a></li>	
							    <li role="presentation"><a href="#overview-tab" role="tab" data-toggle="tab">Overview</a></li>						    
						  	</ul>;
		  	title = <div className="col-md-3"><h1>{this.props.meeting.title}</h1></div>;
		  	date = <div className="col-md-3"><h3>{this.props.meeting.date}</h3></div>;
		}

		return (
			<header className="page-header container">
				<div className="row">
					{title}
					{date}
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