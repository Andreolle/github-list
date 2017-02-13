module.exports = function( grunt ) {
    var setPort = 3030;
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    outputStyle: 'compressed'
                }
            }
        }, // compass

        copy: {
            main: {
                files: [
                    // makes all src relative to cwd
                    {expand: true, cwd: 'assets/images/', src: ['**'], dest: 'build/assets/images'},
                ],
            },
        },

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
                tasks : ['compass' ],
                options: {
                  livereload: true
                },
            }
        } // watch

    });

    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    // Roda Tarefas
    grunt.registerTask( 'build', ['copy']);
    grunt.registerTask( 'run', ['connect', 'open', 'compass', 'watch' ] );

};