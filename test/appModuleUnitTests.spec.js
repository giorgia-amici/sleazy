// describe('Testing search bar', function() {
// 	beforeEach(module('app'));

// 	var scope, ctrl;

// 	beforeEach(inject(function($rootScope, $controller) {
// 		scope = $rootScope.$new();
// 		ctrl = $controller('test', {
// 			$scope: scope
// 		});
// 	});

// 	it('should initialise with an empty search result and form', function() {
// 		expect(scope.searchSong).toBeUndefined();
// 		expect(scope.toSearch).toBeUndefined();
// 	});

// });

describe('Testing search bar', function(){
	var module;
	beforeEach(function(){
		module = angular.module("app", [])

	});

// beforeEach(module("app"));

	it("should be registered", function(){
		console.log("=======")
		console.log( module)
		console.log("=======")
		expect(module).not.toEqual(null);
	});
});