module.export = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['lib/**/*.js', 'models/**/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
}
