angular.module("GitList").factory('githubAPI', function ($http) {
	
	var _getRepos = function() {
		return $http.get("https://api.github.com/users/mundipagg/repos");
	}

	var _getCommits = function(repoName) {
		return $http.get("https://api.github.com/repos/mundipagg/"+repoName+"/commits");
	}

	var _getContributors = function(repoName) {
		return $http.get("https://api.github.com/repos/mundipagg/"+repoName+"/contributors");
	}

	return {
		getRepos: _getRepos,
		getCommits: _getCommits,
		getContributors: _getContributors
	}
});
