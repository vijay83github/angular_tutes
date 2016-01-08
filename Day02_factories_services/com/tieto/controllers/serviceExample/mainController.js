(function(){
	var mainFun = function($scope,firstService){
	$scope.heros = firstService.getHeros();

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