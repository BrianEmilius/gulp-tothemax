var gulp = require("gulp");
var connect = require("gulp-connect");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");

function jsTask() {
	return gulp.src("src/js/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(uglify())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist/assets/js"))
		.pipe(connect.reload());
}

function watchJs() {
	return gulp.watch("src/js/**/*.js", { ignoreInitial: false }, jsTask);
}

module.exports = {
	jsTask,
	watchJs
};
