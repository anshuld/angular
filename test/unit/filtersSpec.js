'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

	describe('checkmark tests', function(){

		beforeEach(module('phonecatFilters'));

		it("should convert booleans to appropriate checkmarks", inject(function(checkmarkFilter) {
			expect(checkmarkFilter(true)).toBe('\u2713');
			expect(checkmarkFilter(false)).toBe('\u2718');
		}));
	});
});
