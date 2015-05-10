module.exports = function (grunt) {
    "use strict";

    var pkg  = grunt.file.readJSON("package.json"),
        date = new Date();

    grunt.initConfig({
        meta: {
            banner: '/*! ' + pkg.name + ' ' + pkg.version + ' | (c) ' + date.getFullYear() + ' ' + pkg.author + ' | ' + pkg.licenses[0].type + ' License */'
        },
        cssmin: {
            target: {
                files: {
                    'build/css/coderwidget.min.css': ['src/css/*.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            target: {
                files: {
                    'build/js/coderwidget.min.js': ['src/js/coderwidget.js']
                }
            }
        },
        watch: {
            css: {
                files: ['src/css/*.css'],
                tasks: ['cssmin'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: ['src/js/coderwidget.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'cssmin', 'uglify' ]);
};
