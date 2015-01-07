angular.module('app').controller('test', function($scope, $http){

	SC.initialize({
		client_id: '0a3ed6b878677694faa3a0067c36d52c'
	})

	$scope.removeSpace = function(string){
	  return string.split(' ').join(''); 
	}
	$scope.activateSearch = function(){
		$scope.toSearch = $scope.removeSpace($scope.toSearchTemp)
 		var songToSearch = $scope.toSearch
 		console.log(songToSearch)
		var searchSong = $http.get("http://api.soundcloud.com/tracks.json?client_id=0a3ed6b878677694faa3a0067c36d52c&q=" + songToSearch + "&limit=10")
 		.success(function(songs){
 			songs.forEach(function(song){
 			var track = song.permalink_url
 			// SC.oEmbed(track, document.getElementById('wrapper'));
 			console.log(track)

 			})
 			// console.log(songs[0].permalink_url)
 			// console.log(searchSong)
 		})
 	}
});



// $scope.doRepos = function(){
//     $scope.repoResults = searchRepos.query({
//       q: $scope.searchTerm
//     })   
// };