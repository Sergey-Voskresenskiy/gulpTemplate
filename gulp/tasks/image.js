module.exports = () => {

	const tinypng = require('gulp-tinypng-unlimited'); // don't forget once, rewrite this horror

	$.gulp.task ('image:dev', () => {
		return $.gulp.src('src/static/img/*.{jpg,png,gif}')
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running image:dev"
			}))
			.pipe($.gulp.dest('build/static/img/'));
	})
	$.gulp.task ('image:build', () => {
		return $.gulp.src('src/static/img/*.{jpg,png,gif}')
			.pipe(tinypng())
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running image:build"
			}))
			.pipe($.gulp.dest('build/static/img/'));
	})
}