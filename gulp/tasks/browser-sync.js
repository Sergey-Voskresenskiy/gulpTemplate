module.exports = () => {
	$.gulp.task ('browser-sync', () => {
		$.browserSync.init ({
			server: {
				baseDir: "./build"
			}
		});
	})
}