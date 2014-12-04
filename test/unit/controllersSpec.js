'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
  	var scope, ctrl, $httpBackend;

  	beforeEach(module('phonecatApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    	$httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/app/phones/phones.json').respond([
        {name: 'Nexus', age: 1},
        {name: 'Sony', age: 2}
        ]);

      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', {$scope:scope})

    }));

    it('should create "phones" model with 2 phones', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();
      expect(scope.phones.length).toBe(2);
    });

    it('should create "phones" model with appropriate names from the mock', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();
      expect(scope.phones).toEqual([
        {name: 'Nexus', age:1},
        {name: 'Sony', age: 2}
        ]);
    });

    it("should start with the newest phones first", function(){
    	expect(scope.sortOrder).toBe('age');
    });

    it("Should be named as Jyotu", function(){
    	expect(scope.name).toBe('Jyotu');
    })
  });

  describe('PhoneDetailController', function() {

    var scope, ctrl, $httpBackend;

    beforeEach(module('phonecatApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond({name: 'Nexus', age: 1});

      scope = $rootScope.$new();
      $routeParams.phoneId = 'xyz';
      ctrl = $controller('PhoneDetailCtrl', {$scope:scope})

    }));

    it('should populate the details for specified phone id', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();
      expect(scope.phone).toEqual({name: 'Nexus', age: 1});
    });
  });
});
