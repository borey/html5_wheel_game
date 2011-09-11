wg.App = function() {
	var init = function(){
		HH.Route.activate();
		wg.EventBus.init();
	};
	
	var changeLocationUrl = function(url){
		window.location.href = url;
	};
	
	return {
		init: init,
		changeLocationUrl: changeLocationUrl
	}
}();
