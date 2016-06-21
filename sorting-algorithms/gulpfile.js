var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp.src('./public/js/app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./public/js/build'))
})

gulp.task('watch', function () {
  gulp.watch('./public/js/*', ['build', 'livereload']);
  gulp.watch('./public/css/*', ['livereload']);
});

gulp.task('connect', function() {
  connect.server({
    root : 'public',
    livereload : true
  });
});

gulp.task('livereload', function () {
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('default', ['build', 'connect', 'watch']);
