module.exports = function( grunt ) {
    var setPort = 3030;
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                mangle : false
            },

            my_target : {
                files : {
                    'build/assets/js/main.min.js' : [ 'assets/js/main.js' ]
                }
            }
        }, // uglify

        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    outputStyle: 'compressed'
                }
            }
        }, // compass

        connect: {
            server: {
                options: {
                    port: setPort
                }
            }
        }, // connect

        open : {
            dev : {
                path: 'http://localhost:'+setPort
            }
        }, // open

        watch : {
            dist : {
                files : [
                    'assets/js/**/*',
                    'assets/scss/**/*'
                ],
                tasks : [ 'uglify', 'compass' ],
                options: {
                  livereload: true
                },
            }
        } // watch

    });

    // Plugins do Grunt
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    // Roda Tarefas
    grunt.registerTask( 'run', [ 'uglify', 'connect', 'open', 'compass', 'watch' ] );

};