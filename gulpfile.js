/**
 * Created by jony on 11/16/16.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function () {
    console.log('This is a test.');
});

gulp.task('test2', function () {
    console.log('This is a test2.');
});

gulp.task('sass', function () {
   return gulp.src('app/scss/styles.scss')
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
});