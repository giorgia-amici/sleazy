describe('does the module exist', function(){

		beforeEach(module('app'));

		var $httpBackend, authRequestHandler;

		var sc = "//connect.soundcloud.com/sdk.js" 
		var scGet = "http://api.soundcloud.com/tracks.json?client_id=d1833a816c234ee6c77a76e948e9dbd1&q="
		var limit = "&limit=55"


		var scope, ctrl;

		beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
			scope = $rootScope.$new();
			ctrl = $controller('search', {$scope: scope});
			$httpBackend = _$httpBackend_;
			authRequestHandler = $httpBackend.when('GET', 'https://docs.angularjs.org/api/ngMock/service/$httpBackend')
                            .respond({userId: 'userX'}, {'A-Token': 'xxx'});
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

			afterEach(function() {
		     $httpBackend.verifyNoOutstandingExpectation();
		     $httpBackend.verifyNoOutstandingRequest();
		   });

			it('searches for a song', function(){
				expect(scope.activateSearch).not.toBeUndefined
				var toSearchTemp = 'gior gia'
				expect(scope.removeSpace(toSearchTemp)).toEqual('giorgia')
				scope.songToSearch = scope.removeSpace(toSearchTemp)
				// scope.$digest();
				authRequestHandler.respond(401, '')
				$httpBackend.expectGET('https://docs.angularjs.org/api/ngMock/service/$httpBackend')
				// $httpBackend.flush();
				// expect($rootScope.status).toBe('Failed...')
				// $httpBackend.verifyNoOutstandingExpectation();	
			})

			it('fails when the url is not correct', function(){
				var boh = $httpBackend.whenGET(scGet + scope.songToSearch + limit).respond(500)
				// console.log(boh)
				// boh.status = 500
				// console.log(boh.status)
				// expect(boh.status).toEqual(500)

			})
	
	})
})






