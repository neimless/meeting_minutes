var AppDispatcher = require('./AppDispatcher');

var MeetingActions = {
	create: function() {
		AppDispatcher.dispatch({
			actionType: 'CREATE'
		});
	},

	addMinute: function(topic) {
		AppDispatcher.dispatch({
			actionType: 'ADDMINUTE',
			topic: topic
		})
	},

	removeMinute: function(id) {
		AppDispatcher.dispatch({
			actionType: 'REMOVEMINUTE',
			id: id
		})
	},

	editMinute: function(text, id) {
		AppDispatcher.dispatch({
			actionType: 'EDITMINUTE',
			text: text,
			id: id
		})
	},

	addParticipant: function(name) {
		AppDispatcher.dispatch({
			actionType: 'ADDPARTICIPANT',
			name: name
		})
	},

	removeParticipant: function(name) {
		AppDispatcher.dispatch({
			actionType: 'REMOVEPARTICIPANT',
			name: name
		})
	}
};

module.exports = MeetingActions;