/* convert to docx */
var gulp = require('gulp');
var pandocWriter = require('gulp-pandoc-writer');

gulp.task('build', function() {
    gulp.src('2016*/*.md')
        .pipe(pandocWriter({
            outputDir: 'petj_comments',
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
