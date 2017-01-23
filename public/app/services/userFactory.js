(function(){
	angular.module("myApp").factory("UserFactory", ["$http", function($http){
		return {
			getUser : function(){
				return $http.get("/users/register");
			}
		}
	}])
}())

