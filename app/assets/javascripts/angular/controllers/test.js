angular.module('app').controller('test', function($scope, $http){
		// http://api.soundcloud.com/tracks/HateitOrLoveIt?client_id=0a3ed6b878677694faa3a0067c36d52c
		// http://api.soundcloud.com/tracks/halo?client_id=0a3ed6b878677694faa3a0067c36d52c
// 112436777
	$scope.activateSearch = function(){
		var songToSearch = $scope.toSearch
 		console.log($scope.toSearch)
		var searchSong = $http.get("http://api.soundcloud.com/tracks/" + songToSearch + "?client_id=0a3ed6b878677694faa3a0067c36d52c")
 		searchSong
 		.success(function($scope){
 			var track = $scope.permalink_url
 			SC.oEmbed(track, document.getElementById('player'));
 		})
 	}
 		// $scope.doSearch = function(){

 		// }
});
