(function(){
	var spriderFun = function($scope){
		$scope.title="Spiderman"; 
		$scope.releaseDate="2016-03-03"; 
		$scope.fName="Peter"; 
		$scope.lName="Parker"; 
		$scope.city="New york"; 
		$scope.power=9; 
		$scope.image="images/spider1_tn.jpg";
	}
	angular.module("app").controller("spidermanController",spriderFun);
	spriderFun.$Inject= ["$scope"];
})();