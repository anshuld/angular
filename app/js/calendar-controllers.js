'use strict';

/* Controllers */

var calendarModule = angular.module('calendarModule', []);

calendarModule.controller('CalendarController', ['$scope', function($scope) {
  $scope.phones = "hello";
  $scope.name = "Jyotu";
  $scope.sortOrder = "age";
}]);




