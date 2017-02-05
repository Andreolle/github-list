module.exports = function( grunt ) {
    var setPort = 8080;
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


        watch : {
            dist : {
                files : [
                    'assets/js/**/*',
                    'assets/scss/**/*'
                ],
                tasks : [ 'uglify', 'compass' ]
            }
        } // watch

    });

    // Plugins do Grunt
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Roda Tarefas
    grunt.registerTask( 'run', [ 'uglify', 'connect','compass', 'watch' ] );

};