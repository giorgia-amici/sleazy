angular.module('app').controller('search', function($scope, $http){

	// SC.initialize({
	// 	client_id: 'd1833a816c234ee6c77a76e948e9dbd1'
	// })

	$scope.removeSpace = function(string){
	  return string.split(' ').join(''); 
	}

	$scope.activateSearch = function(){
		$scope.toSearch = $scope.removeSpace($scope.toSearchTemp)
 		var songToSearch = $scope.toSearch
		var searchSong = $http.get("http://api.soundcloud.com/tracks.json?client_id=d1833a816c234ee6c77a76e948e9dbd1&q=" + songToSearch + "&limit=55")
 		.success(function(songs){
 				$scope.songs = songs
				$scope.list = []
		 			songs.forEach(function(song){
		 				song.playing = "false"
			 			var track = song.permalink_url
			 			$scope.list.push(song)
		 		})
		})
		.error(function(){
			console.log(error.status)
		})
	}

	// $scope.playStopSong = function(song){
	// 	SC.stream("/tracks/" + song.id, function(sound){
	// 		if(song.playing === "true"){
	// 			soundManager.stopAll();
	// 		 	song.playing = "false"
	// 		}
	// 	 	else{
	// 		  sound.play(song)
	// 			$scope.thisTitle = song.title
	// 			console.log($scope.thisTitle)
	// 			song.playing = "true"
	// 			// console.log(song.id)
	// 		}
	// 	})
	// }
	
	// $scope.test = {}	

	// $scope.submit = function(song){
	// 	$scope.test = {object: song.permalink_url, title: song.title }
	// 	var toSubmit = $scope.test
	// 	$http.post('/tracks', toSubmit)
	// 	.success(function(response) {

	// 	});
	// 	console.log(toSubmit)
	// }

	// $scope.stopSong = function(){
	// 	soundManager.stopAll();
	// 	song.playing = "false"
	// }
});
