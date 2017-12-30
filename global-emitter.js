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

  return {
    emit: emit,
    on: on
  }
}());