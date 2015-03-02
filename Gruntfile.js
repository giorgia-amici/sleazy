'use strict';

module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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