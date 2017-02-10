angular.module("GitList").controller('GitListController', function ($scope, githubAPI) {
	
	$scope.repoDetails = [];
	$scope.listRepos = [];

	var listRepos = function () {
		githubAPI.getRepos().success(function(data) {
			$scope.listRepos = data;
		});
	};

	var repoDetails = function (repoID) {
		githubAPI.getRepos().success(function(response) {
			response.forEach(function(obj, index) {
				if(response[index].id == repoID) {
					$scope.repoDetails = response[index];
				}
			});
		});
	}


	repoDetails("64309121");
	listRepos();
});