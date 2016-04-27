global.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');
var MeetingApp = require('../react/MeetingApp.react');

ReactDOM.render (
	<MeetingApp />, 
	document.getElementById('app-placeholder')	
);
