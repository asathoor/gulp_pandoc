Gulp Pandoc Project
===================


The package json - first get the get gulp-pandoc-writer package:

~~~~
{
  "name": "hop16",
  "version": "1.0.0",
  "description": "Had to try an automated pandoc thing.",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "asathoor <per@multimusen.dk>",
  "license": "ISC",
  "devDependencies": {
    "gulp-pandoc-writer": "^1.0.2"
  }
}
~~~~

The Gulpfile is pretty straightforward:

~~~~

/* convert to .docx, .odt or ...  */
var gulp = require('gulp');
var pandocWriter = require('gulp-pandoc-writer');

gulp.task('build', function() {
    gulp.src('src/*.md')
        .pipe(pandocWriter({
            outputDir: 'dest',
            inputFileType:'.md',
            outputFileType: '.docx',
            args: [
                '--smart'
            ]
        })) 
        .pipe(gulp.dest('out'));
});

// === Default ===
gulp.task('default', ['build'], function() {
});
