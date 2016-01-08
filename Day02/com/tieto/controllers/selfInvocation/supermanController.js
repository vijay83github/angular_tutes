(function(){
	
	var superFun = function($scope){
		$scope.title="Superman"; 
		$scope.releaseDate="2016-02-02"; 
		$scope.fName="Clark"; 
		$scope.lName="Kent"; 
		$scope.city="Chicago"; 
		$scope.power=9; 
		$scope.image="images/superman.jpg";
	}
	
	angular.module("app").controller("supermanController",superFun);
	
})();
