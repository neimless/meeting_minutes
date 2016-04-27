var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var MeetingMinutes = {};

function create() {
	var id = MeetingMinutes.length + 1;
	MeetingMinutes[id] = {
		id: id
	};
};

var MeetingStore = assign({}, EventEmitter.prototype, {

  getAllMinutes: function() {
    return MeetingMinutes;
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

    default:
  }
});

module.exports = MeetingStore;
