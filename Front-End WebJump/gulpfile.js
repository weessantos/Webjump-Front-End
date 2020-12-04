'use strict';

const gulp = require('gulp')
const gulpPug = require('gulp-pug')
const gulpSass = require('gulp-sass')
const gulpWatch = require('gulp-watch')
const gulpUglify = require('gulp-uglify')

function ignoreError(error) {
    console.error(error.toString())
    this.emit('end')
}

const compilePug = () => {
    return gulp
        .src('source/index.pug')
        .pipe(gulpPug())
        .on('error', ignoreError)
        .pipe(gulp.dest('dist/'))
}

const compileSass = () => {
    return gulp
        .src('source/**/*.scss')
        .pipe(gulpSass())
        .on('error', ignoreError)
        .pipe(gulp.dest('dist/'))
}

const compileJs = () => {
    return gulp
        .src('source/**/*.js')
        .pipe(gulpUglify())
        .on('error', ignoreError)
        .pipe(gulp.dest('dist/'))
}

const copyMedia = () => {
    return gulp
        .src('public/media/*.{png,svg,gif,jpg}')
        .pipe(gulp.dest('dist/media/'))
}


gulp.task('pug', compilePug)
gulp.task('sass', compileSass)
gulp.task('js', compileJs)
gulp.task('images', copyMedia)

gulp.task('watch-pug', () => {
    return gulpWatch('source/**/*.pug', compilePug)
})

gulp.task('watch-sass', () => {
    return gulpWatch('source/**/*.scss', compileSass)
})

gulp.task('watch-js', () => {
    return gulpWatch('source/**/*.js', compileJs)
})

gulp.task('build', gulp.series('pug', 'sass', 'js', 'images'))
gulp.task('watch', gulp.parallel('watch-pug', 'watch-sass', 'watch-js'))
gulp.task('dev', gulp.parallel('build', 'watch'))