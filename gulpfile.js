/**
 * Created by eli on 3/2/15.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var minifyCSS = require('gulp-minify-css');
var bower = require('main-bower-files');

var paths = {
    scripts: 'front/js/**/*.js',
    css: 'front/css/**/*.css',
    html: 'front/*.html'
};

// Destroys build folder to run fresh
gulp.task('clean', function() {
    del(['build']);
});

gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('css', function() {
    return gulp.src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
});

gulp.task('libs', function() {
    return gulp.src(bower())
        .pipe(gulp.dest('build/lib'))
});

// Builds output directory
gulp.task('build', ['clean', 'scripts', 'css', 'libs'], function() {
    return gulp.src(['front/index.html','front/robots.txt'])
        .pipe(gulp.dest('build'))
});