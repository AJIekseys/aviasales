module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jsmin-sourcemap');
  grunt.initConfig({
    'jsmin-sourcemap': {
      all: {
        src: ['js/**/*.js'],
        dest: 'js/scripts.min.js',
        destMap: 'js/scripts.min.js.map'
      }
    }
  });
  grunt.registerTask('default', 'jsmin-sourcemap');
};