var testCase = TestCase("ApplicationTest");

testCase.prototype = {
	setUp: function(){
	
	},
	
	tearDown: function(){
	
	},
	
	testInit: function(){
		var mockRoute = sinon.mock(HH.Route);
		mockRoute.expects("activate").once();
		
		var mockEventBus = sinon.mock(wg.EventBus);
		mockEventBus.expects("init").once();

		wg.App.init();
		
		mockEventBus.verify();
		mockRoute.verify();
		
		mockRoute.restore();
		mockEventBus.restore();
	}
};
