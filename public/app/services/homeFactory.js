(function(){
	angular.module("myApp").factory("HomeFactory", ["$http", function($http){
		return {
			getMessage : function(){
				return $http.get("/");
			}
		}
	}])
}())