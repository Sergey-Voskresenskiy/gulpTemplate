module.exports = ()=> {
	$.gulp.task('fonts', ()=> {
		return $.gulp.src('./static/fonts/**/*.*')
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running fonts"
			}))
			.pipe($.gulp.dest('./build/static/fonts/'));
	})
}