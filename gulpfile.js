var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// 压缩js
gulp.task('minifyjs', function() {
    gulp.src('src/**/*.js').pipe(uglify())
    .pipe(gulp.dest('./'));  //输出

});

// 初始化
gulp.task('default', ['minifyjs']);
