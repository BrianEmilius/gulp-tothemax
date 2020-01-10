var connect = require("gulp-connect");
var { htmlTask, watchHTML } = require("./tasks/html");
var { sassTask, watchScss } = require("./tasks/scss");
var { jsTask, watchJs } = require("./tasks/js");
var { imageTask, watchImages } = require("./tasks/images");
var { mediaTask, watchMedia } = require("./tasks/media");

function watch() {
	watchHTML();
	watchScss();
	watchJs();
	watchImages();
	watchMedia();
	connect.server({
		livereload: true,
		root: "dist",
		port: 3000
	});
}

function build(done) {
	htmlTask();
	sassTask();
	jsTask();
	imageTask();
	mediaTask();
	done();
}

exports.default = watch;
exports.build = build;
