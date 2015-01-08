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
	}

	$scope.playStopSong = function(song){
		SC.stream("/tracks/" + song.id, function(sound){
			if(song.playing === "true"){
				soundManager.stopAll();
			 song.playing = "false"
			 console.log(song.playing)
			}
		 	else{
		  sound.play(song)
			song.playing = "true"
			console.log(song.playing)
			}
		})
	}

	$scope.songsToHide = function(){
		$scope.list.forEach(function(song){
			if(song.playing==='false')
				return song
		})
	}



 });
