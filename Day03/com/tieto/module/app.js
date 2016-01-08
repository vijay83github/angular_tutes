(function(){
	angular.module("app",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller : "heroController",
			templateUrl : "com/tieto/views/heroview.html"
		})	
		.when("/movies/:id",{
			controller : "moviesController",
			templateUrl : "com/tieto/views/movies.html"
		})	
		.when("/heroes/:id",{
			controller : "heroController",
			templateUrl : "com/tieto/views/heroview.html"
		})	
		.otherwise({
			redirectTo : "/"
		});
	});
})();
