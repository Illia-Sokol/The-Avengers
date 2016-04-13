var gulp = require('gulp'),
		less = require('gulp-less');
 
gulp.task('default', function () {
    return gulp.src('/src/*')
        .pipe(gulp.dest('/build/'));
});

gulp.task('less', function() {
	return gulp.src('less/*.less')
				.pipe(less())
				.pipe(gulp.dest('css/'))
});

gulp.task('watch', function() {
	gulp.watch('less/*less', ['less'])
})
