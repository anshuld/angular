'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
  	var scope, ctrl

  	beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
    	scope = {}
    	ctrl = $controller('PhoneListCtrl', {$scope:scope})
    }));

    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
      expect(scope.name).toBe("Jyotu");
    });

    it("should start with the newest phones first", function(){
    	expect(scope.sortOrder).toBe('age');
    });

    it("Should be named as Jyotu", function(){
    	expect(scope.name).toBe('Jyotu');
    })
  });
});
