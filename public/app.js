var app = require("myApp", []);

app.config(["$locationProvider","$routeProvider", function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix("");

	$routeProvider
		.when("/home", {
			controller: "HomeController",
			templateUrl: "views/home.html"
		})
		.when("/register", {
			constroller: "RegisterController",
			templateUrl: "views/login.html"
		})		
		.when("/login", {
			constroller: "LoginController",
			templateUrl: "views/login.html"
		})
		
}]);

app.controller("HomeController", ["$scope", function($scope){
	$scope.message = "I am Home"
}])