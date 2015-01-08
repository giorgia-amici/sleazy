describe('test', function() {
	beforeEach(module('test'));

	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('test', {
			$scope: scope
		});
	});

	it('should initialise with an empty search result and form', function() {
		expect(scope.searchSong).toBeUndefined();
		expect(scope.toSearch).toBeUndefined();
	});

});