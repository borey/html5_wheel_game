wg.App = function() {
	var init = function(){
		HH.Route.activate();
		wg.EventBus.init();
	};
	
	return {
		init: init
	}
}();
