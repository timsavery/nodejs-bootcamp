var util = require('util'),
		events = require('events');

/*
 * Create a class that inherits from EventEmitter
 */
function MyEmitter() {
	events.EventEmitter.apply(this);

	this.emitSomething = function() {
		emitter.emit('some_event', 'any data', 'that goes along with it');
	};
}

util.inherits(MyEmitter, events.EventEmitter);


/*
 * Create an instance of MyEmitter and handle events
 */
var emitter = new MyEmitter();

emitter.on('some_event', function(data1, data2) {
  console.log(data1 + ' ' + data2);

  var now = new Date();
  while (new Date().getTime() - now.getTime() < 2000);
});

emitter.on('some_event', function() {
  console.log('do your homework');
});

emitter.emitSomething();