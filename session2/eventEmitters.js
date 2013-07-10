var events = require('events');

var emitter = new events.EventEmitter();

events.EventEmitter.prototype.emitSomething = function() {
  emitter.emit('some_event', 'any data', 'that goes along with it');
};

emitter.on('some_event', function(data1, data2) {
  console.log(data1 + ' ' + data2 + '\n');

  var now = new Date();
  while (new Date().getTime() - now.getTime() < 2000);
});

emitter.on('some_event', function() {
  console.log('do your homework');
});

emitter.emitSomething();