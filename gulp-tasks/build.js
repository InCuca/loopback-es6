import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import path from 'path';
import {dirs} from './config.js';

gulp.task('build:test', () => {
  return gulp.src(path.resolve(dirs.test, '**/*.test.js'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(gulp.dest(dirs.buildTest));
});

gulp.task('build:client', () => {
  return gulp.src(path.resolve(dirs.srcClient, '**/*.js'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(gulp.dest(dirs.buildClient));
});

gulp.task('build:common', () => {
  return gulp.src(path.resolve(dirs.srcCommon, '**/*.js'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(gulp.dest(dirs.buildCommon));
});

gulp.task('build:server', () => {
  return gulp.src(path.resolve(dirs.srcServer, '**/*.js'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(gulp.dest(dirs.buildServer));
});

gulp.task('build', [
  'build:test',
  'build:client',
  'build:common',
  'build:server',
]);
