var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var sourcemaps = require("gulp-sourcemaps");
var clean = require("gulp-clean-css");
var concat = require("gulp-concat");

function sassTask() {
	return gulp.src("src/scss/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		//.pipe(concat("style-bundle.css"))
		.pipe(clean({ compatibility: "ie6" }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("dist/assets/css"))
		.pipe(connect.reload());
}

function watchScss() {
	return gulp.watch("src/scss/*.scss", { ignoreInitial: false }, sassTask);
}

module.exports = {
	sassTask,
	watchScss
};
