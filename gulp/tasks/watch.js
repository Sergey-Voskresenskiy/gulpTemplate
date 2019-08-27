module.exports = () => {
	$.gulp.task ('watch', () => {
		$.gulp.watch ('src/pug/**/*.pug', $.gulp.series ('pug'));
		$.gulp.watch ('src/static/stylus/**/*.styl', $.gulp.series ('stylus'));
		$.gulp.watch ('src/static/js/**/*.js', $.gulp.series ('scripts'));
		$.gulp.watch ('src/static/img/**/*.*', $.gulp.series ('image:dev'));
	})
}