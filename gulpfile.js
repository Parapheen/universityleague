const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');


gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

gulp.task('default', gulp.series('browser-sync', () => {

    gulp.watch('dist/*.html', browserSync.reload);
}));