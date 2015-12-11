var gulp = require('gulp');


gulp.task('css', function () {
  gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('js', function () {
  gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('default', ['js', 'css']);