'use strict';

module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// the following task is going to clean everything that is in the subfolder called ToBeCleaned
		clean: {
			output: ['ToBeCleaned/*']
		}
	});


	grunt.loadNpmTasks("grunt-contrib-clean");

	// create entry point
	// the first param is the name of the task, the second param is 
	// the argument of the task where you actually call
	grunt.registerTask("default", ['clean']);
};