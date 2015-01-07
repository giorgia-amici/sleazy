angular.module('app').controller('test', function($scope, $http){
	$scope.removeSpace = function(string){
	  return string.split(' ').join(''); 
	}
	$scope.activateSearch = function(){
		$scope.toSearch = $scope.removeSpace($scope.toSearchTemp)
 		var songToSearch = $scope.toSearch
		var searchSong = $http.get("http://api.soundcloud.com/tracks/" + songToSearch + "?client_id=0a3ed6b878677694faa3a0067c36d52c")
 		searchSong
 		.success(function($scope){
 			var track = $scope.permalink_url
 			SC.oEmbed(track, document.getElementById('wrapper'));
 		})
 	}
});
