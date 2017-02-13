angular.module("GitList").controller('OverviewController', function ($scope, $rootScope, githubAPI, $stateParams, $state) {
	
	$scope.name = $stateParams.name;
	$scope.repoInfo = [];
	$scope.repoCommits = [];
	$scope.repoContributors = "";

	function getInfo(repoName) {
		githubAPI.getRepos().success(function(response) {
			response.forEach(function(obj, index) {
				if(response[index].name == repoName) {
					return $scope.repoInfo = response[index];
				}
			});
		});

		githubAPI.getContributors(repoName).success(function(response) {
			return $scope.repoContributors = response.length;
		});

		githubAPI.getCommits(repoName).success(function(response) {
			return $scope.repoCommits = response;
		});
	}

	getInfo($scope.name)
});