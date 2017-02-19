angular.module('GitList').factory('gitAPICache', function ($cacheFactory) {
	return $cacheFactory('gitAPICache', {
		capacity: 30
	});
})