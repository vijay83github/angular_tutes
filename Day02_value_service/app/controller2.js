(function(){
	var fun2 = function($scope,companyDetails){
		$scope.compName = companyDetails.compName;
		$scope.city = companyDetails.city;
		$scope.headCount = companyDetails.headCount;
	};
	
	angular.module("app").controller("controller2",fun2);
})();