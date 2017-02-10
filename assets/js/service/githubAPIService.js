angular.module("GitList").factory('githubAPI', function ($http) {
	
	var _getRepos = function() {
		return $http.get("https://api.github.com/users/mundipagg/repos");
	}

	var _getCommits = function() {
		// Trocar por variáveis com o nome do repositório
		return $http.get("https://api.github.com/repos/mundipagg/Magento.Integracao/commits");
	}

	var _getContributors = function() {
		// Trocar por variáveis com o nome do repositório
		return $http.get("https://api.github.com/repos/mundipagg/Magento.Integracao/contributors");
	}

	return {
		getRepos: _getRepos,
		getCommits: _getCommits,
		getContributors: _getContributors
	}
});
