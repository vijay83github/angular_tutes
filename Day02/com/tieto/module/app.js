angular.module("app",["ngRoute"])
	.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller : "mainController",
		templateUrl : "com/tieto/views/main.html"
	})
	.when("/batman",{
		controller : "batmanController",
		templateUrl : "com/tieto/views/heroview.html"
	})
	.when("/ironman",{
		controller : "ironmanController",
		templateUrl : "com/tieto/views/heroview.html"
	})
	.when("/spiderman",{
		controller : "spidermanController",
		templateUrl : "com/tieto/views/heroview.html"
	})
	.when("/superman",{
		controller : "supermanController",
		templateUrl : "com/tieto/views/heroview.html"
	})
});