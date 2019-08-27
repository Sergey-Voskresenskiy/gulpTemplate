module.exports = () => {
	$.gulp.task ('scripts:lib', () => {
		return $.gulp.src (['node_modules/jquery/dist/jquery.js', 'node_modules/svg4everybody/dist/svg4everybody.min.js', 'node_modules/lazyload/lazyload.min.js'])
			.pipe ($.gp.concat ('libs.min.js'))
			.pipe ($.gulp.dest ('build/static/js/'))
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running libs"
			}))
			.pipe ($.browserSync.reload ({stream: true}));
	})
	$.gulp.task ('scripts', () => {
		return $.gulp.src ('./src/static/js/main.js')
			.pipe ($.gulp.dest ('build/static/js/'))
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running scripts"
			}))
			.pipe ($.browserSync.reload ({stream: true}));
	})
}