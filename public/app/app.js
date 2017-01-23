(function(){
	angular.module("myApp", ['ngRoute'])
		   .config(["$locationProvider","$routeProvider", function($locationProvider, $routeProvider){
				
				$locationProvider.hashPrefix("");

				$routeProvider
					
					.when("/home", {
						controller: "MemberController",
						templateUrl: "/views/home.html"
					})		
					.when("/register", {
						controller: "RegisterController",
						templateUrl: "views/register.html"
					})		
					.when("/login", {
						controller: "LoginController",
						templateUrl: "/views/login.html"
					})					
	}])
}())







