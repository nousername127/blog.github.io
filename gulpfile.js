var gulp = require('gulp')

var uglify = require('gulp-uglify')

gulp.task('script', done => {
// 1\. 找到文件
gulp.src('bower_components/jquery/dist/jquery.min.js')
// 2\. 压缩文件
.pipe(uglify())
// 3\. 另存压缩后的文件
.pipe(gulp.dest('dist/js'))

done()
})


// var gulp = require('gulp');
// var mainBowerFiles = require('main-bower-files');

// gulp.task('compress', function() {
//     return gulp.src(mainBowerFiles())
//         .pipe( uglify() )
//         .pipe( concat('main.js') )
//         .pipe( gulp.dest('./dist') )
//         .pipe( notify({ message: 'compress task complete' })  )
// });

// const mainBowerFiles = require('main-bower-files');     //引入模块

// gulp.task('scripts',
//     gulp.series('test', function scriptsInternal() {
//         let glob = mainBowerFiles('**/*.js');         //声明glob变量       
//         glob.push('./app/scripts/*.js');              //把自己的代码匹配规则添加到数组中
//         return gulp.src(glob)                         //把数组传递给gulp.src()
//             .pipe(concat('main.min.js'))
//             .pipe(uglify())
//             .pipe(gulp.dest('dist/scripts'));
//     })
// );
