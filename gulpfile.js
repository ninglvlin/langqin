let gulp = require('gulp');//等价于HTML代码：<script src='gulp.js'>
// let concat = require('gulp-concat');
// let uglify = require('gulp-uglify');
// let rename = require('gulp-rename');
// let sass = require('gulp-sass');

//这个任务：把当前目录下的index.html文件拷贝到服务器目录
// gulp.task("copy-html", async ()=>{
// 	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\web1811\\day31"));
// });

//建立一个监听的任务
gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\longines"));
	});

	gulp.watch("img/**/*",async ()=>{
		gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\longines\\img"));
    });
    
    gulp.watch("js/**/*",async ()=>{
		gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\longines\\js"));
	});
    gulp.watch("css/**/*",async ()=>{
		gulp.src("css/**/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\longines\\css"));
    });
	gulp.watch("font/**/*",async ()=>{
		gulp.src("font/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\longines\\font"));
	});
	gulp.watch("php/**/*",async ()=>{
		gulp.src("php/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\longines\\php"));
	});
  // gulp.watch("sass/**/*",async ()=>{
	// 	gulp.src()
	// }) 
	// //合并
	// gulp.watch(["js/index.js","js/goodslist.js"],async ()=>{
	// 	gulp.src(["js/index.js","js/goodslist.js"])
	// 	.pipe(concat("tools.js"))
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1811\\day31\\js"));
	// });

	// //压缩
	// gulp.watch(["js/index.js"],async ()=>{
	// 	gulp.src(["js/index.js"])
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1811\\day31\\js"));
	// });

	// gulp.watch(["js/index.js","js/goodslist.js"],async ()=>{
	// 	gulp.src(["js/index.js","js/goodslist.js"])
	// 	.pipe(concat("tools.js"))
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web\\blyj\\js"))
	// 	.pipe(uglify())
	// 	.pipe(rename("tools.min.js"))
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web\\blyj\\js"));
	// });
});