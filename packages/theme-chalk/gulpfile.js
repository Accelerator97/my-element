const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoPrefixer = require('gulp-autoprefixer') //添加厂商前缀
const cssmin = require('gulp-cssmin')

function compile() {
    return src('./src/*.scss')
        .pipe(sass.sync())
        .pipe(autoPrefixer({
            overrideBrowserslist: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(dest('./lib'))
}

function copyfont() {
    return src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
