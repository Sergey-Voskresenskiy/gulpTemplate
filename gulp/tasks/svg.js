module.exports= ()=>{
	$.gulp.task('svg', ()=>{
		return $.gulp.src('./src/static/img/svg/*.svg')
			.on ("error", $.gp.notify.onError ({
				message: "Error: <%= error.message %>",
				title: "Error running svg"
			}))
			.pipe($.gp.svgmin({
				js2svg: { pretty: true }
			}))
			.pipe($.gp.cheerio({
				run: ($)=>{
					$('fill').removeAttr('fill');
					$('stroke').removeAttr('stroke');
					$('style').removeAttr('style');
				},
				parserOptions: {xmlMode: true}
			}))
			.pipe($.gp.replace('&gt;', '>'))
			.pipe($.gp.svgSprite({
				mode: {
					symbol: {
						sprite: 'sprite.svg'
					}
				}
			}))
			.pipe($.gulp.dest('./build/static/img/svg'));
	});
};