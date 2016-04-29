var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Meeting = {
		state: 'NOTSTARTED'
};
var minuteId = 1;

function create() {	
	Meeting = {
		state: 'INPROGRESS',
		title: '',
		date: '',
		minutes: []
	};
};

function addMinute() {
	var id = minuteId;
	minuteId++;
	Meeting.minutes[id] = {
		id: id,
		title: '',
		text: ''
	};
};

function removeMinute(id) {
	delete Meeting.minutes[id];
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
      addMinute();
      MeetingStore.emitChange();
      break;

 	case 'REMOVEMINUTE':
      removeMinute(action.id);
      MeetingStore.emitChange();
      break;

    default:
  }
});

module.exports = MeetingStore;
