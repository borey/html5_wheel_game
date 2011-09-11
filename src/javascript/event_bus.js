wg.EventBus = function() {
	var ea = wg.EventAggregator,
		event = wg.Events;
	
	var init = function(){
		ea.subscribe(event.CHANGE_LOCATION_URL, wg.App.changeLocationUrl);
	};
	
	return {
		init: init
	}
}();
