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


controllersModule.controller('PhoneDetailCtrl', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
	$log.log($routeParams.phoneId);
	$scope.phoneId = $routeParams.phoneId;
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
    $log.log('inside');
    $scope.phone= data;
    $scope.mainImageUrl = data.images[0];
  });
  $log.log('outside')


  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };

  $scope.hello = function(name) {
    alert('Hello ' + (name || 'Jyotu') + '!!');
  };

}]);

