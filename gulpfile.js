var gulp = require("gulp");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");


//监听任务
gulp.task("watch-all",async ()=>{
	//复制文件
	gulp.watch("./**/*",async ()=>{
		gulp.src("./**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\1more"));
	});
});	