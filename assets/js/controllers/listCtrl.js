angular.module("GitList").controller('GitListController', function ($scope, githubAPI) {
	
	var localData = window.sessionStorage.getItem('repositorios'),
		localData = JSON.parse(localData);
	
	$scope.listRepos = localData;

	var listRepos = function () {
		if(localData == null) {
			console.log("criado sectionStorage");
			githubAPI.getRepos().success(function(data) {
				window.sessionStorage.setItem('repositorios', JSON.stringify(data));
				return $scope.listRepos = data;
			});
		} else {
			// console.log("Consumindo do sessionStorage");
		}
	};

	listRepos();
});