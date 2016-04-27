var AppDispatcher = require('./AppDispatcher');

var MeetingActions = {
	create: function() {
		AppDispatcher.dispatch({
			actionType: 'CREATE'
		});
	}
};

module.exports = MeetingActions;