wg.dom = function() {
	var doc = document;
	
	var create = function(tag, attributes){
		var dom = doc.createElement(tag);
		for(var attName in attributes) {
			dom.attName = attributes[attName]; 
		}
		
		return dom;
	};
	
	return {
		create: create
	}
}();
