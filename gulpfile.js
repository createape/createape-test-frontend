const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const log = require('gulplog');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const prefix = require('gulp-autoprefixer');

var prefixOptions = {
  browsers: ['last 5 versions']
};

gulp.task('sass', function(){
  return gulp.src('app/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefix(prefixOptions))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dist/styles'))
    .pipe(browsersync.reload({
      stream: true
    }))
});

gulp.task('js', function () {
  var b = browserify({
    entries: 'app/js/app.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .on('error', log.error)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dist/js'))
    .pipe(browsersync.reload({
      stream: true
    }))
});

gulp.task('browsersync', function() {
  browsersync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browsersync', 'sass', 'js'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/**/*.html', browsersync.reload);
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('app/dist/img'))
});

gulp.task('build', ['sass', 'js', 'images']);