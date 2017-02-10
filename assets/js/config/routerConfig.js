angular.module("GitList").config(function ($routeProvider) {
	$routeProvider.when('/repositorio/', {
		templateUrl: 'assets/view/repositoryOverview.html'
		// controller: 'GitListController'
	}).otherwise({ 
		templateUrl: 'assets/view/nonSelected.html'
	});
});

// githubAPI.repoDetails("67161724")