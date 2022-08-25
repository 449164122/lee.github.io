/*
 * @Author: 李韬
 * @Date: 2022-07-21 11:30:34
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-01 17:39:26
 */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');

gulp.task('sass', async function() {
  return gulp.src('packages/css/**/*scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('lib/css'));
});
gulp.task('fonts', function () {
  return gulp.src('packages/fonts/**')
  .pipe(gulp.dest('lib/fonts'));
});