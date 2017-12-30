var GlobalEmitter = (function() {
  var events = {}

  function emit(event, data) {
    if (events.hasOwnProperty(event)) {
      events[event].callback(data);
    }
  }

  function on(event, callback) {
    events[event] = {
      callback: callback
    };
  }

  function off(event) {
    if (events.hasOwnProperty(event)) {
      delete events[event];
    }
  }

  return {
    emit: emit,
    on: on,
    off: off
  }
}());