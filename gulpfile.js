var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
sass.compiler = require("node-sass");
const autoprefixer = require("gulp-autoprefixer");
const { watch } = require("gulp");

function defaultTask(cb) {
  // place code for your default task here
  return gulp
    .src([
      "node_modules/bootstrap/scss/bootstrap.scss",
      "scss/styles.scss",
    ])
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "compressed", // you can set "expand or compact or compressed" view
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: true,
      })
    )
    .pipe(gulp.dest("css"));
}

function watchTask() {
  watch("scss/**/*.scss", defaultTask);
}
exports.default = defaultTask;
exports.watch = watchTask;
