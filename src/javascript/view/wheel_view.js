wg.WheelView = function() {
	var render = function(){
		var wheelDiv = wg.dom.get("wheel-container");
		wheelDiv.innerHTML = "Game Page";
	};
	
	return {
		render: render
	}
}();
