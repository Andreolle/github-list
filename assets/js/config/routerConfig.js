angular.module("GitList").config(function ($locationProvider, $stateProvider) {
	
	$stateProvider.state('start', {
		url: '/',
		templateUrl: 'assets/view/nonSelected.html',
		controller: 'OverviewController'
	});

	$stateProvider.state('repositorio', {
		url: '/repositorio/:name',
		templateUrl: 'assets/view/repositoryOverview.html',
		controller: 'OverviewController'
	});

	
	// $locationProvider.html5Mode(true);

});