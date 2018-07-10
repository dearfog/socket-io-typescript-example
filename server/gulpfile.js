var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./dist"));
});

//set up a watcher to watch over changes
gulp.task('watch', ['build'], () => {
    gulp.watch('src/**.ts', ['build']);
});

gulp.task('default', ['watch']);
  