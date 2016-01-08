(function(){
	angular.module("config",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when("/",{
			controller : "mainController",
			templateUrl : "com/tieto/views/main.html"
		})
		$routeProvider.when("/:hero",{
			controller : "heroController",
			templateUrl : "com/tieto/views/heroview.html"
		})
		$routeProvider.when("/heroes/:id",{
			controller : "moviesController",
			templateUrl : "com/tieto/views/movies.html"
		})
	})
	
	})();