module.exports = () => {
	$.gulp.task ('browser-sync', () => {
		$.browserSync.init ({
			server: {
				baseDir: "./build"
			}
		})
		.on ("error", $.gp.notify.onError ({
			message: "Error: <%= error.message %>",
			title: "Error running browser-sync"
		}));
	})
}