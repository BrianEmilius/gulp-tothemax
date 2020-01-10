var fs = require("fs");
var path = require("path");
var mkdir = require("mkdirp");

var TEMPLATE_DIR = path.join(__dirname, "pkg");
var MODE_0666 = parseInt('0755', 8);

if (!fs.existsSync("./package.json")) {
	console.log("Please run <npm init> before you run this file");
	process.exit(1);
}

function copyFile(from, to) {
	write(to, fs.readFileSync(path.join(TEMPLATE_DIR, from), 'utf-8'));
}

function copyFileMulti(fromDir, toDir) {
	fs.readdirSync(path.join(TEMPLATE_DIR, fromDir))
		.forEach(function(file) {
			copyFile(path.join(fromDir, file), path.join(toDir, file));
		});
}

function write(file, str, mode) {
	fs.writeFileSync(file, str, { mode: mode || MODE_0666 });
  console.log('   \x1b[36mcreate\x1b[0m : ' + file);
}

mkdir.sync("./tasks");
mkdir.sync("./src/html/layouts");
mkdir.sync("./src/scss");
mkdir.sync("./src/js");
mkdir.sync("./src/images");
mkdir.sync("./src/media");

copyFileMulti("tasks", "./tasks");
copyFileMulti("src/html", "./src/html");
copyFileMulti("src/html/layouts", "./src/html/layouts");
copyFileMulti("src/scss", "./src/scss");
copyFileMulti("src/js", "./src/js");
copyFileMulti("src/images", "./src/images");
copyFileMulti("src/media", "./src/media");
copyFile("gulpfile.js", "./gulpfile.js");

var package = require("./package");

package.devDependencies = {
	"@babel/core": "^7.7.7",
	"@babel/preset-env": "^7.7.7",
	"gulp": "^4.0.2",
	"gulp-babel": "^8.0.0",
	"gulp-clean-css": "^4.2.0",
	"gulp-concat": "^2.6.1",
	"gulp-connect": "^5.7.0",
	"gulp-imagemin": "^6.2.0",
	"gulp-pug": "^4.0.1",
	"gulp-rename": "^2.0.0",
	"gulp-sass": "^4.0.2",
	"gulp-sourcemaps": "^2.6.5",
	"gulp-uglify": "^3.0.2",
	"imagemin-jpeg-recompress": "^6.0.0"
};

write("./package.json", package);