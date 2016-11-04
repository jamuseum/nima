const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

gulp.task('sass', function(){
	gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'))
})

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		port:'1337',
		proxy: {
			target:'localhost:3000/',
			ws:true
		}
	});
	gulp.watch('./sass/*.scss', ['sass'])
	gulp.watch('./public/css/*.css').on('change', browserSync.reload)
	gulp.watch('./views/*/*.*').on('change', browserSync.reload)	
})

gulp.task('default', ['serve'])