var gulp = require('gulp'),
    babel = require('gulp-babel'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    eslint = require('gulp-eslint'),
    bro = require('jsdom-test-browser');

require('babel/polyfill');

if (!global.Intl) {
    require('intl');
}

gulp.task('build', ['lint'], function () {
    return gulp.src(['index.js', 'src/*.js', 'src/*.jsx', 'tests/*.js'], {base: '.'})
        .pipe(babel())
        .pipe(gulp.dest('build'));
});

gulp.task('jsdom', function (callback) {
    bro.newBrowser(callback);
});

gulp.task('test', ['build', 'jsdom'], function () {
    return gulp.src('build/tests/*.spec.js', {read: false}).pipe(mocha({reporter: 'min'}));
});

gulp.task('coverage', ['build', 'jsdom'], function (callback) {
    gulp.src(['build/src/*.js', 'build/*.js'])
        .pipe(istanbul({includeUntested: true}))
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            gulp.src(['build/tests/*.spec.js'])
                .pipe(mocha())
                .pipe(istanbul.writeReports())
                .on('end', callback);
        });
});

gulp.task('lint', function () {
    return gulp.src(['index.js', 'src/*.js', 'src/*.jsx', 'tests/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('default', function () {
    gulp.watch(['index.js', 'src/*.js', 'src/*.jsx', 'tests/*.js'], ['test']);
});
