var gulp = require("gulp");
var connect = require("gulp-connect");
var imagemin = require("gulp-imagemin");
var recompress = require("imagemin-jpeg-recompress");

function imageTask() {
	return gulp.src("src/images/*")
		.pipe(imagemin([
			imagemin.jpegtran({ progressive: true }),
			recompress({
				min: 70,
				max: 90,
				target: 0.8
			})
		]))
		.pipe(gulp.dest("dist/assets/images"))
		.pipe(connect.reload());
}

function watchImages() {
	return gulp.watch("src/images/*", { ignoreInitial: false }, imageTask);
}

module.exports = {
	imageTask,
	watchImages
};
