var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssimport = require("postcss-import");

gulp.task("html", function(){
  console.log("HTML is useful.")
});
gulp.task("styles", function(){
  return gulp.src("app/assets/styles/main.css")
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/dist/styles"));
});

gulp.task("watch", function(){

  watch("./app/index.html", function(){
    gulp.start("html");
  });
  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("styles");
  });

});
