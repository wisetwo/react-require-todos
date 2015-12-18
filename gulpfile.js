'use strict';

var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var app = require('./server');

gulp.task('htmlcopy', function () {
	return gulp.src([
		'src/*.html'
	])
	.pipe(gulp.dest('dist'))
	.pipe($.size({title: 'html copied'}));
});

gulp.task('styles', function () {
	return gulp.src([
		'src/css/*.css'
	])
	.pipe($.csso())
	.pipe(gulp.dest('dist/css'))
	.pipe($.size({title: 'styles minified'}));
});
gulp.task('jscopy', function() {
    return gulp.src([
    	'src/js/*.js',
    	'bower_components/**/@(director|react|react-dom|require).js'
    ]).pipe(gulp.dest('.tmp/js'))
	.pipe($.size({title: 'js copied'}));
});

gulp.task('jsxcompile', function() {
    return gulp.src('src/js/*.jsx')
        .pipe(babel({
        	presets: ['react']
        }))
        .pipe(gulp.dest('.tmp/js'));
});

//lint our js only
gulp.task('jshint', function () {
	return gulp.src('.tmp/js/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('jsuglify', function() {
    return gulp.src('.tmp/js/**/*.js')
        .pipe($.uglify({preserveComments: 'some'}))
        .pipe(gulp.dest('dist/js'))
        .pipe($.size({title: 'js uglified'}));
});


//clean directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('default', ['clean'], function (cb) {
	runSequence(['htmlcopy', 'styles', 'jscopy', 'jsxcompile'], ['jshint', 'jsuglify'], cb);
});

gulp.task('serve', function (cb) {
	app.listen(app.get('port'), function(){
		console.log('running at port:'+app.get('port'));
	});
});
