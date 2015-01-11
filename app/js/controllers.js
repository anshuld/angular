'use strict';

/* Controllers */

var controllersModule = angular.module('phonecatControllers', []);

controllersModule.controller('PhoneListCtrl', ['$scope', '$http', 'Phone', function($scope, $http, Phone) {
  $scope.phones = Phone.query()

$scope.name = "Jyotu";
$scope.sortOrder = "age";
// $scope.query = 'nexus';
}]);


controllersModule.controller('PhoneDetailCtrl', ['$scope', '$log', '$http', '$routeParams', 'Phone', function($scope, $log, $http, $routeParams, Phone) {
	$log.log($routeParams.phoneId);
	$scope.phoneId = $routeParams.phoneId;

  $scope.phone = Phone.get({phoneId: $scope.phoneId}, function(phone){
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };

  $scope.hello = function(name) {
    alert('Hello ' + (name || 'Jyotu') + '!!');
  };

}]);

