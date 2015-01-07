angular.module('app').controller('test', function($scope, $http){
		var searchSong = $http.get("http://api.soundcloud.com/tracks/112436777.json?client_id=0a3ed6b878677694faa3a0067c36d52c")
 		searchSong.success(function($scope){
 			var track = $scope.permalink_url
 			SC.oEmbed(track, document.getElementById('player'));
 		})



 	// console.log($scope.song.stream_url)




});
