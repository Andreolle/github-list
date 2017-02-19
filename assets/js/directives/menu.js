angular.module("GitList").directive('menu', function () {
	return {
		templateUrl: "assets/view/menu.html",
		replace: true,
		restrict: 'AE',
		transclude: true,
		required: "ngModel",
		scope: {
			logo: "@",
			class: "@"
		},
		link: function(scope, element, attrs) {
			var hamburger = element.children(".menu-container");
			hamburger.bind("click", function() {
				if(hamburger.hasClass("change")) {
					hamburger.removeClass("change");
					element.removeClass("open")
				} else {
					hamburger.addClass("change");
					element.addClass("open")
				}
			});
		}
	};
});