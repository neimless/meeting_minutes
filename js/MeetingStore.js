var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Meeting = {
		state: 'NOTSTARTED'
};
var minuteId = 1;

function create() {	
	console.log('MeetingStore.create');
	Meeting = {
		state: 'INPROGRESS',
		title: 'TestMeeting',
		date: new Date().toLocaleString('fi'),
		minutes: [],
		participants: []
	};
};

function addMinute(topic) {
	console.log('MeetingStore.addMinute %s', topic);
	var id = minuteId;
	minuteId++;
	Meeting.minutes[id] = {
		id: id,
		topic: topic,
		text: ''
	};
};

function removeMinute(id) {
	console.log('MeetingStore.removeMinute %s', id);
	delete Meeting.minutes[id];
};

function editMinute(text, id) {
	console.log('MeetingStore.addMinute %s, %s', id, text);
	Meeting.minutes[id].text = text;
};

function addParticipant(name) {
	console.log('MeetingStore.addParticipant %s', name);
	Meeting.participants.push(name);
};

function removeParticipant(name) {
	console.log('MeetingStore.removeParticipant %s', name);
	var index = Meeting.participants.indexOf(name);
	if (index !== -1) {
		Meeting.participants.splice(index, 1);
	};	
};

var MeetingStore = assign({}, EventEmitter.prototype, {

  getMeeting: function() {
    return Meeting;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case 'CREATE':
		create();
		MeetingStore.emitChange();
		break;

 	case 'ADDMINUTE':
		addMinute(action.topic);
		MeetingStore.emitChange();
		break;

 	case 'REMOVEMINUTE':
		removeMinute(action.id);
		MeetingStore.emitChange();
		break;

	case 'EDITMINUTE':
		editMinute(action.text, action.id);
		MeetingStore.emitChange();
		break;

  	case 'ADDPARTICIPANT':
  		addParticipant(action.name);
  		MeetingStore.emitChange();
		break;		

	case 'REMOVEPARTICIPANT':
  		removeParticipant(action.name);
  		MeetingStore.emitChange();
		break;		

    default:
  }
});

module.exports = MeetingStore;
