describe('does the module exist', function(){

		beforeEach(module('app'));

		var $httpBackend;

		var sc = "//connect.soundcloud.com/sdk.js" 
		var scGet = "http://api.soundcloud.com/tracks.json?client_id=d1833a816c234ee6c77a76e948e9dbd1&q="
		var limit = "&limit=55"


		var scope, ctrl;

		beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
			scope = $rootScope.$new();
			ctrl = $controller('search', {$scope: scope});
			$httpBackend = _$httpBackend_;
			authRequestHandler = $httpBackend.when('GET', '/auth.py')
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
				var string = 'giorgia hello'
				expect(scope.removeSpace(string)).toEqual('giorgiahello')
			})

            

			it('searches for a song', function(){
				expect(scope.activateSearch).not.toBeUndefined
				var toSearchTemp = 'gior gia'
				expect(scope.removeSpace(toSearchTemp)).toEqual('giorgia')
				scope.songToSearch = scope.removeSpace(toSearchTemp)
				console.log(scGet + scope.songToSearch + limit)
				$httpBackend.expectGET(scGet + scope.songToSearch + limit).respond(200)
				 // authRequestHandler.respond(404, '');
				 // $httpBackend.expectGET('/auth.py');
				 // $httpBackend.verifyNoOutstandingExpectation();



			})
	
})
})






