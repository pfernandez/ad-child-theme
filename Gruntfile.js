'use strict';

var basePath = '/wp-content' + __dirname.split('wp-content')[1];

module.exports = function(grunt) {

  grunt.initConfig({
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
          'dist/css/styles.min.css': [
          	// List additional css/less files here.
          	'less/styles.less'
          ]
        },
        options: {
          compress: true,
          rootpath: basePath + '/less',
          sourceMap: true,
          sourceMapFilename: 'dist/css/styles.css.map',
          sourceMapRootpath: basePath
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
          'dist/js/scripts.min.js': [
          	// List additional js files/libraries here.
          	'js/scripts.js'
          ]
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
        files: ['less/styles.less'],
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
          'dist/css/styles.min.css',
          'dist/js/scripts.min.js',
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
