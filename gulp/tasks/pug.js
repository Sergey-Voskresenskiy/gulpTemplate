module.exports = () => {
	$.gulp.task ('pug', () => {
		return $.gulp.src ('src/pug/pages/*.pug')
			.pipe ($.gp.pug ({
				pretty: true
			}))
			.pipe ($.gulp.dest ('build'))
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running pug"
			}))
			.pipe($.browserSync.reload({stream: true}));
	})
}