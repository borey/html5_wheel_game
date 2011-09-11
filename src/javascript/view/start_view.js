wg.StartView = function() {
	var render = function(){
		var registerDiv = wg.dom.create("div", {
			className: "register"
		});
		
		_renderRegistrationForm(registerDiv);
		
		var startButton = wg.dom.create("span", {
			className: "button center",
			id: "start-button",
			innerHTML: "Start..."
		});
		
		var wheelDiv = wg.dom.get("wheel-container");
		wheelDiv.innerHTML = "";
		
		wheelDiv.appendChild(registerDiv);
		wheelDiv.appendChild(startButton);
		
		_addEventToStartButton(startButton);
	};
	
	var _renderRegistrationForm = function(container){
		var playerDiv = wg.dom.create("div", {
			className: "register-form"
		});
		
		var playerLabel = wg.dom.create("span", {
			className: "people-name",
			innerHTML: "Player Name"
		});
		
		var playerName = wg.dom.create("input", {
			"type": "text",
			id: "player-name",
			className: "name-form",
			placeholder: "Enter player name"
		});
		
		playerDiv.appendChild(playerLabel);
		playerDiv.appendChild(playerName);
		
		var oponentDiv = wg.dom.create("div", {
			className: "register-form"
		});
		
		var oponentLabel = wg.dom.create("span", {
			className: "people-name",
			innerHTML: "Oponent Name"
		});
		
		var oponentName = wg.dom.create("input", {
			"type": "text",
			id: "oponent-name",
			className: "name-form",
			placeholder: "Enter oponent name"
		});
		
		oponentDiv.appendChild(oponentLabel);
		oponentDiv.appendChild(oponentName);
		
		container.appendChild(playerDiv);
		container.appendChild(oponentDiv);
	};
	
	var _addEventToStartButton = function(startButton) {
		startButton.addEventListener("click", function(){
			var player = wg.dom.get("player-name").value,
				oponent = wg.dom.get("oponent-name").value;
			
			wg.StartPresenter.goToWheelPage(player, oponent);
		}, false);
	};
	
	return {
		render: render
	}
}();
