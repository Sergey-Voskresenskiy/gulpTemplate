module.exports = ()=> {
	$.gulp.task('fonts', ()=> {
		return $.gulp.src('./static/fonts/**/*.*')
			.pipe($.gulp.dest('./build/static/fonts/'));
	})
}