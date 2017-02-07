angular.module("GitList").controller('GitListController', function ($scope, $http) {
	
	$scope.repos = [];

	var getRepos = function () {
		$http.get("https://api.github.com/users/mundipagg/repos").success(function(data) {
			$scope.repos = data;
		});
	};

	getRepos();
});