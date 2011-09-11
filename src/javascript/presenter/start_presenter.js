wg.StartPresenter = function() {
	var init = function(){
		wg.StartView.render();
	};
	
	var goToWheelPage = function(player, oponent){
		var url = "#wheel?player=" + player + "&oponent=" + oponent;
		console.log("do here");
		wg.EventAggregator.publish(wg.Events.CHANGE_LOCATION_URL, url);
	};
	
	return {
		init: init,
		goToWheelPage: goToWheelPage
	}
}();
