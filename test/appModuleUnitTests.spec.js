describe('does the module exist', function(){

		beforeEach(module('app'));

		var httpBackend;

		var sc = "//connect.soundcloud.com/sdk.js" 
		var scGet = "dhttp://api.soundcloud.com"

		var scope, ctrl;

		beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
			scope = $rootScope.$new();
			ctrl = $controller('search', {$scope: scope});
			httpBackend = _$httpBackend_;
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
				httpBackend.expectGET(scGet).respond(200)
			})
	
})
})






