var AppDispatcher = require('./AppDispatcher');

var MeetingActions = {
	create: function() {
		AppDispatcher.dispatch({
			actionType: 'CREATE'
		});
	},

	addMinute: function() {
		AppDispatcher.dispatch({
			actionType: 'ADDMINUTE'
		})
	},

	removeMinute: function(id) {
		AppDispatcher.dispatch({
			actionType: 'REMOVEMINUTE',
			id: id
		})
	}
};

module.exports = MeetingActions;