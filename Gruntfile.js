module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: './node_modules/font-awesome/css/', 
                    src: ['**/*'], 
                    dest: './styles/css'
                }, {
                    expand: true,
                    cwd: './node_modules/font-awesome/fonts/', 
                    src: ['**/*'], 
                    dest: './styles/fonts'
                }, {
                    expand: true,
                    cwd: './node_modules/jquery/dist/', 
          			src: ['**/*'], 
            		dest: './js/jquery/dist'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
}