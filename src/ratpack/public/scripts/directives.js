'use strict';

var directives = angular.module('doogie.directives', ['ngAnimate']);

directives.directive('cbMessage', function($animate) {
    return {
        restrict: "A",
        replace: true,
        transclude: true,
        scope: {
            type: '@',
            show: '&'
        },
        templateUrl: 'templates/message-box.tpl.html',
        controller: function($scope, $element, $attrs) {
            $scope.close = function() {
                $animate.leave($element);
            }
        }
    }

});

directives.directive('cbJournalLink', function() {
    return {
        restrict: "A",
        scope: false,
        templateUrl: 'templates/journal-link.tpl.html'
    }

});