wg.EventAggregator = function() {
	var events = {};
	return {
		subscribe: function(eventName, callback) {
			events[eventName] = events[eventName] || [];
			events[eventName].push(callback);
		},
		
		publish: function(eventName) {
			var callbacks = events[eventName];
			if (callbacks) {
				var args = Array.prototype.slice.call(arguments, 1);
				for (var i = 0; i < callbacks.length; i++) {
					callbacks[i].apply(null, args);
				}
			}
		}
	};
}();
