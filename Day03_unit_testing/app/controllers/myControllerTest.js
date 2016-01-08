describe("Testing myController",function(){
	beforeEach(module("app"));
	var controller;
	beforeEach(inject(function($controller){
		controller = $controller;
	}));
	
	it("",function(){
		var emptyScope = {};
		controller("",{
			emptyScope : $scope
		});
		
	});
	afterEach(module("app"));
});