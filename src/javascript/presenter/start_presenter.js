wg.StartPresenter = function() {
	var init = function(){
		wg.StartView.render();
	};
	
	return {
		init: init
	}
}();
