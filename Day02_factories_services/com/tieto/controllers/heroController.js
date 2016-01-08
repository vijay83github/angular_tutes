(function(){
	var heroFun = function($scope,$routeParams){
		$scope.heroName = $routeParams.hero;
		
	}
	angular.module("app").controller("heroController",heroFun);
})();
