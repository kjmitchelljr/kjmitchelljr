const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile Sass & Inject Into Browser
gulp.task('sass', function() {
  return gulp
    .src(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

//Move JS Files to js
gulp.task('js', function() {
  return gulp
    .src([
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js'
    ])
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

//Watch Script.js File
gulp.task('script', function() {
  gulp.watch('js/script.js').on('change', browserSync.reload);
});

//Watch Sass & Server
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './'
  });

  gulp.watch(
    ['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'],
    ['sass']
  );
  gulp.watch('*.html').on('change', browserSync.reload);
});

//Move Fonts Folder to src
gulp.task('fonts', function() {
  return gulp.src(['node_modules/font-awesome/*']).pipe(gulp.dest('fonts'));
});

//Move Font Awesome CSS to css
gulp.task('fa', function() {
  return gulp
    .src(['node_modules/font-awesome/css/font-awesome.min.css'])
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['js', 'script', 'serve', 'fa', 'fonts']);
