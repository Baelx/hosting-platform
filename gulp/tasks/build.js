var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require("browser-sync").create();

gulp.task('preview', function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});
gulp.task('preview-en', function() {
  browserSync.init({
    startPath: '/en',
    server: {
      baseDir: "dist"
    }
  });
});
gulp.task('preview-fr', function() {
  browserSync.init({
    startPath: '/fr',
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task('deleteDistFolder', function() {
  return del("./dist");
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('videos', function() {
  return gulp.src('./app/assets/videos/*').pipe(gulp.dest('./dist/assets/videos'));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
  return gulp.src("./app/en/index.html")
  .pipe(usemin({
    css: [function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}]
  })).pipe(gulp.dest("./dist/en")),
  gulp.src("./app/fr/index.html")
  .pipe(usemin({
    css: [function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}]
  }))
  .pipe(gulp.dest("./dist/fr"));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'videos', 'usemin']);
