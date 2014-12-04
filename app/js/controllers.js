'use strict';

/* Controllers */

var controllersModule = angular.module('phonecatControllers', []);

controllersModule.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/app/phones/phones.json').success(function(data){
    $scope.phones = data;//.splice(0, 5);  
  });
  
  $scope.name = "Jyotu";
  $scope.sortOrder = "age";
  // $scope.query = 'nexus';
}]);

controllersModule.controller('PhoneDetailCtrl', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
	$log.log($routeParams.phoneId);
	$scope.phoneId = $routeParams.phoneId;
}]);