module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         js: {
            src: ['../javascripts/main.js'],
            dest: '../dist/app.js'
         },
         options: {
            browserifyOptions: {
               paths: [
                  "./node_modules"
               ]
            }
         }
      },
      jshint: {
         options: {
            predef: ["document", "console", "$"],
            esnext: true,
            strict: "global",
            globals: { "Cake": true, "$": true },
            browserify: true,
            debug: true
         },
         files: ['../javascripts/**/*.js']
      },
      watch: {
         javascripts: {
            files: ['../javascripts/**/*.js'],
            tasks: ['jshint', 'browserify']
         },
         browserify: {
            files: ['../javascripts/*.js'],
            tasks: ["browserify"]
         }
      }
   });

   require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
   grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};
