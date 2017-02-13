angular.module("GitList").controller('GitListController', function ($scope, githubAPI) {
	
	$scope.listRepos = [];

	var listRepos = function () {
		githubAPI.getRepos().success(function(data) {
			return $scope.listRepos = data;
		});
	};

	$scope.open = function() {
		$scope.isActive = !$scope.isActive;
	}

	listRepos();
});