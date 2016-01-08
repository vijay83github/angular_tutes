(function(){
	var mainFun = function($scope,firstFactory){
	$scope.heros = firstFactory.heros;

	$scope.title=	"Tieto";
	$scope.copy = "abc";
	$scope.sortFun =  function(val) {
	
		$scope.sortBy = val;
		$scope.reverse = !$scope.reverse;
	
	}
	
	};




var moveNext = function(val) {
	this.offset += 3;
}
var moveBack = function(val) {
	this.offset -= 3;
}

angular.module("app").controller("mainController",mainFun);
})();