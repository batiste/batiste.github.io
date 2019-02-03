"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var stylish = require("jshint-stylish");
var jshint = require("gulp-jshint");
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var shell = require('gulp-shell');

gulp.task("build", ['bootstrap'],function() {
  return browserify("./cokescript.js", {
      debug: true,
      standalone: "cokescript"
    })
    .bundle()
    .pipe(source("cokescript.js"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("bootstrap", function() {
   return gulp.src('')
    .pipe(shell("lib/coke.js cokescript.coke -o cokescript.js"));
});

gulp.task("jshint", function() {
  gulp.src("cokescript.js")
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task("release", ['build'], function() {
  return browserify("./cokescript.js", {
      debug: false,
      standalone: "cokescript"
    })
    .bundle()
    .pipe(source("cokescript.min.js"))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", function() {
  gulp.start("build");
});

gulp.task("virtual", function() {
  return browserify("./node_modules/virtual-dom/dist/virtual-dom.js", {
      debug: false,
      standalone: "virtual-dom"
    })
    .bundle()
    .pipe(streamify(uglify()))
    .pipe(gulp.dest("./dist"));
});

gulp.task("test", ['build'], function() {
  gulp.src(['dist/cokescript.js'])
    .pipe(shell("lib/coke.js --glob test/*.coke --convert"))
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()); // Creating the reports after tests runned
    });
});

