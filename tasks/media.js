var gulp = require("gulp");
var connect = require("gulp-connect");

function mediaTask() {
	return gulp.src("src/media/*")
		.pipe(gulp.dest("dist/assets/media"))
		.pipe(connect.reload());
}

function watchMedia() {
	return gulp.watch("src/media/*", { ignoreInitial: false }, mediaTask);
}

module.exports = {
	mediaTask,
	watchMedia
};
