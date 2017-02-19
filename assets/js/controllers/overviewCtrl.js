angular.module("GitList").controller('OverviewController', function ($scope, githubAPI, $stateParams, $state, gitAPICache) {
	
	$scope.name = $stateParams.name;

	$scope.repoCommits = gitAPICache.get($scope.name);
	$scope.repoInfo = [];
	$scope.repoContributors = '';


	function getInfo(repoName) {

		if(!gitAPICache.get(repoName)) {
			githubAPI.getCommits(repoName).success(function(response) {
				gitAPICache.put(repoName, response);
				return $scope.repoCommits = response;
			});
		}


		githubAPI.getContributors(repoName).success(function(response) {
			return $scope.repoContributors = response.length;
		});


		githubAPI.getRepos().success(function(response) {
			response.forEach(function(obj, index) {
				if(response[index].name == repoName) {
					return $scope.repoInfo = response[index];
				}
			});
		});

	}

	getInfo($scope.name)
});