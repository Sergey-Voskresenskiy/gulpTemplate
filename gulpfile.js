'use strict';

global.$ = {
	gulp: require ('gulp'),
	gp: require ('gulp-load-plugins') (),
	browserSync: require ('browser-sync').create (),
	path: {
		tasks: require ('./gulp/config/tasks')
	}
};

$.path.tasks.forEach((taskPath) =>{
	require(taskPath)();
});

$.gulp.task ('default', $.gulp.series (
	$.gulp.parallel ('pug', 'stylus', 'scripts:lib', 'scripts', 'image:dev', 'svg', 'fonts'),
	$.gulp.parallel ('watch', 'browser-sync'),
))
$.gulp.task ('build', $.gulp.series (
	$.gulp.parallel ('pug', 'stylus', 'scripts:lib', 'scripts', 'image:build', 'svg', 'fonts'),
	$.gulp.parallel ('watch', 'browser-sync'),
))