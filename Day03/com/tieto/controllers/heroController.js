(function(){
	var heroFun = function($scope,$routeParams,firstService){
		$scope.heros = firstService.getHeros();
		$scope.heroId = $routeParams.id;
		 $scope.heroName =  "";
   		 for (var i = 0; i < $scope.heros.length; i++) { 
   			 if($scope.heros[i].id == $routeParams.id){
   			 	$scope.heroName  = $scope.heros[i].title;
   			 	break;
   			 }
		 }
		$scope.sortFun =  function(val) {
	
			$scope.sortBy = val;
			$scope.reverse = !$scope.reverse;
	
		}
	}
	
	
	angular.module("app").controller("heroController",heroFun);
})();
