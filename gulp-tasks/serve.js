import gulp from 'gulp';
import server from '../server/server.js';

gulp.task('serve', () => {
  server.start();
});
