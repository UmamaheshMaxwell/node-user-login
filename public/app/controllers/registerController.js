(function(){
	angular.module("myApp")
		   .controller("RegisterController", ["$scope", "UserFactory", function($scope, UserFactory){
				UserFactory.getUser()
						   .then(function(response){
						   		console.log(response.data.message)
						   		$scope.message = response.data.message;
						   })
	
			}])
}());