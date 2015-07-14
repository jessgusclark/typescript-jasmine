var gulp = require('gulp');
var ts = require('gulp-typescript');

// watchers:
gulp.task('watch', function() {

	gulp.watch('./source/**/*.ts', function() {
	    gulp.run('default'/*, 'scripts'*/);
	  });

});

gulp.task('default', function () {
  var tsResult = gulp.src('source/typescript/*.ts')
    .pipe(ts({
        noImplicitAny: false/*,
        out: '/'
        out: 'output.js'*/
      }));
  return tsResult.js.pipe(gulp.dest('build/local/js'));
});