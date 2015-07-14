var gulp = require('gulp');
var ts = require('gulp-typescript');

// watchers:
gulp.task('watch', function() {

	gulp.watch('./source/**/*.ts', function() {
	    gulp.run('default'/*, 'scripts'*/);
	  });

});

gulp.task('default', function () {
  var tsResult = gulp.src('source/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'output.js'
      }));
  return tsResult.js.pipe(gulp.dest('built/local'));
});