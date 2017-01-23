(function(){
	angular.module("myApp")
		   .controller("HomeController",  ["$scope", "HomeFactory", function($scope, HomeFactory){		
		$scope.message = "This is Home"
		$scope.description ="Welcome to the home"			

	}])	
}())