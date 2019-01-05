var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', function() {
  return gulp.src('dist/**')
    .pipe(rsync({
      root: 'dist/',
      username: 'minima',
      hostname: 'do-web',
      destination: '/home/minima/public_html',
      archive: true,
      silent: false,
      compress: true
    }));
});
