console.log("")

angular.module('app').controller('search', function($scope, $http){

	SC.initialize({
		client_id: 'd1833a816c234ee6c77a76e948e9dbd1'
	})

	$scope.removeSpace = function(string){
	  return string.split(' ').join(''); 
	}
	$scope.activateSearch = function(){
		$scope.toSearch = $scope.removeSpace($scope.toSearchTemp)
 		var songToSearch = $scope.toSearch
 		// console.log(songToSearch)
				var searchSong = $http.get("http://api.soundcloud.com/tracks.json?client_id=d1833a816c234ee6c77a76e948e9dbd1&q=" + songToSearch + "&limit=55")
		 		.success(function(songs){
				 			$scope.list = []
				 			// console.log(songs)
				 			songs.forEach(function(song){
				 				// console.log(song)
				 				
				 				var track = song.permalink_url
				 				$scope.list.push(song)
				 			// firstTrack = songs[0].permalink_url
		 			})
				 			console.log($scope.list)
				 				// console.log($scope.list)
		 			// SC.oEmbed(firstTrack, document.getElementById('wrapper'));
		 		})
 }

});
