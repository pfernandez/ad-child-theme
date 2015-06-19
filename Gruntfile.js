'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/scripts.js',
      ]
    },
    less: {
      dist: {
        files: {
          'dist/css/styles.min.css': ['less/styles.less']
        },
        options: {
          compress: true,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install.
          sourceMap: true,
          sourceMapFilename: 'dist/css/styles.css.map',
          sourceMapRootpath: '/wp-content/themes/<%= pkg.name %>/' // Defined in package.json
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 9'],
        src: 'dist/css/styles.min.css',
        dest: 'dist/css'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/scripts.min.js': ['js/*.js']
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL
          // based on your install.
          // sourceMap: 'assets/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/assets/js/scripts.min.js.map'
        }
      }
    },
    version: {
      assets: {
        files: {
          'functions.php': ['dist/css/styles.min.css', 'dist/js/scripts.min.js']
        }
      }
    },
    watch: {
      less: {
        files: ['library/less/*.less'],
        tasks: ['less', 'version']
      },
      js: {
        files: ['<%= jshint.all %>'],
        tasks: ['uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'library/dist/css/styles.min.css',
          'library/js/*',
          'style.css',
          '*.php'
        ]
      }
    },
    clean: {
      dist: [
        'library/dist/css',
        'library/dist/js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-wp-assets');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'autoprefixer',
    'uglify',
    'version'
  ]);

};
