var testCase = TestCase("StartPresenter");

testCase.prototype = {
	setUp: function(){
	
	},
	
	tearDown: function(){
	
	},
	
	testInit: function(){
		var mockStartView = sinon.mock(wg.StartView);
		mockStartView.expects("render").once();
		
		wg.StartPresenter.init();
		
		mockStartView.verify();
		
		mockStartView.restore();
	}
};
