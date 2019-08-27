module.exports = () => {
	$.gulp.task ('stylus', () => {
		return $.gulp.src ('src/static/stylus/main.styl')
			.pipe ($.gp.sourcemaps.init ())
			.pipe ($.gp.stylus ({
				'include css' : true,
				compress: true
			}))
			.pipe ($.gp.autoprefixer ({
				browsers: ['last 10 versions']
			}))
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running style"
			}))
			.pipe ($.gp.csso ())
			.pipe ($.gp.sourcemaps.write ())
			.pipe ($.gulp.dest ('build/static/css'))
			.pipe($.browserSync.reload({stream: true}));

	})
}