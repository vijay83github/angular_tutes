angular.module("app").controller("heroController",function($scope){

	$scope.heros=[
{title:'Batman', releaseDate:'2016-01-01', fName:'Bruce', lName:'Wayne', city:'Gotham', power:7, image:'images/bat1_tn.jpg',price:500},
{title:'Ironman', releaseDate:'2016-02-02', fName:'Tony', lName:'Stork', city:'New jersey', power:8 , image:'images/iron1_tn.jpg',price:400},
{title:'Spiderman', releaseDate:'2016-03-03', fName:'Peter', lName:'Parker', city:'New york', power:9, image:'images/spider1_tn.jpg',price:350},
{title:'Robot', releaseDate:'2016-04-04', fName:'Rajni', lName:'Kanth', city:'Chennai', power:70, image:'images/rajani.jpg',price:300 },
{title:'Superman', releaseDate:'2016-07-03', fName:'Clark', lName:'Kent', city:'Chicago', power:9, image:'images/superman.jpg',price:200},
{title:'Phantom', releaseDate:'2016-04-05', fName:'One', lName:'Two', city:'Mumbai', power:7, image:'images/phantom.jpg',price:100}]; 

$scope.sortBy='title'; 

$scope.reverse= 'false';

$scope.filterBy='';

$scope.offset=0;

$scope.showMe=true;

$scope.pageLimit=3;
	


$scope.sortFun = function(val) {
	
	$scope.sortBy = val;
	$scope.reverse = !$scope.reverse;
	
}
$scope.moveNext = function(val) {
	
	$scope.offset += 3;
}
$scope.moveBack = function(val) {
	
	$scope.offset -= 3;
}

});


