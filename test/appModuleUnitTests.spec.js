// describe('Testing search bar', function() {
// 	beforeEach(module('app'));


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

describe('does the module exist', function(){

		beforeEach(module('app'));

		var sc = "//connect.soundcloud.com/sdk.js" 


		var scope, ctrl;

		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			ctrl = $controller('search', {$scope: scope});
		}));

		it("should be registered", function(){
			expect(module).not.toEqual(null);
		});

	describe('search', function(){

			it('is a controller', function(){
				expect(ctrl).toBeDefined();
				expect(scope).toBeDefined;
			})

			it('removes spaces after typing in the search bar', function(){
				expect(scope.removeSpace).toBeDefined
				var string = 'giorgia amici'
				expect(scope.removeSpace(string)).toEqual('giorgiaamici')
			})

			it('searches for a song', function(){
				expect(scope.activateSearch).not.toBeUndefined
				var toSearchTemp = 'giorgia bella'
				expect(scope.removeSpace(toSearchTemp)).toEqual('giorgiabella')
				scope.songToSearch = scope.removeSpace(toSearchTemp)
				console.log(scope.songToSearch)
			})
	
})
})





