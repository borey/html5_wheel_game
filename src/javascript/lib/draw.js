wg.draw = function() {
	var circle = function(context, option){
		var centerX = options.centerX || 200,
			centerY = options.centerY || 200,
			radius = options.radius || 190,
			startingAngle = options.startingAngle || 0,
			endingAngle = options.endingAngle || 0,
			counterclockwise = options.counterclockwise || false;
			
		context.beginPath();
		context.moveTo( options.centerX, options.centerY );
		
		context.arc(
			options.centerX, 
			options.centerY, 
			options.radius, 
			options.startingAngle * Math.PI, 
			options.endingAngle * Math.PI, 
			options.counterclockwise
		);
		
		context.lineTo( options.centerX, options.centerY );	
		context.lineWidth = 2;
		context.strokeStyle = "black"; 
		context.stroke();
		context.fillStyle = options.fillStyle;
		context.fill();
	};
	
	return {
		circle: circle
	}
}();
