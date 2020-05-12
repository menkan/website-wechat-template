/**
 * @Created by xuTongze on 20200411
 * @Descript Gulp configs
*/
'use strict'

const { watch, series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const del = require('del')

sass.compiler = require('node-sass')

/* 清除无效|过期内容(html\css\javascript) */
async function clean(cd){
  await del(['./css/index.css'])
  cd()
}

/* handle css */
function handleCss(){
  return src('./css/index.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./css/styles/'))
}

exports.default = async function() {
  watch('./css/index.scss', series(clean, handleCss))
}