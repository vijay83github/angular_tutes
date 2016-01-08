(function(){
	
	var fun = function($scope, companyDetails){
		$scope.compName = companyDetails.compName;
		$scope.city = companyDetails.city;
		$scope.headCount = companyDetails.headCount;
	};
	
	angular.module("app").controller("controller1",fun);
})();

