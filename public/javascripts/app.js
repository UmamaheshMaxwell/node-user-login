var app = angular.module("myApp", ['ngRoute']);

app.config(["$locationProvider","$routeProvider", function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix("");

	$routeProvider
		.when("/home", {
			controller: "HomeController",
			templateUrl: "views/home.html"
		})
		.when("/register", {
			constroller: "RegisterController",
			templateUrl: "views/register.html"
		})		
		.when("/login", {
			constroller: "LoginController",
			templateUrl: "views/login.html"
		})		
}])