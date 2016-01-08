(function(){
	var findMovies = function($scope,$routeParams,firstFactory){
		$scope.heros = firstFactory.heros;
	
		
   		 $scope.movieList =  "[]";
   		 for (var i = 0; i < $scope.heros.length; i++) { 
   			 if($scope.heros[i].id == $routeParams.id){
   			 	$scope.movieList  = $scope.heros[i].movieslist;
   			 	break;
   			 }
		 }
	
		
	}
	angular.module("app").controller("moviesController",findMovies);
})();
