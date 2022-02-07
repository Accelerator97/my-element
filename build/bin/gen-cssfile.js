/**
 * 自动在packages/src/index.scss中引入各个组件的样式文件
 */

var fs = require('fs')
var path = require('path')
var themes = ['theme-chalk']
var Components = require('../../components.json')
Components = Object.keys(Components)
var basepath = path.resolve(__dirname, '../../packages/')

function fileExist(filePath) {
    try {
        return fs.statSync(filePath).isFile()
    } catch (err) {
        return false
    }
}

themes.forEach((theme) => {
    var isSCSS = theme !== 'theme-default' // 返回布尔值
    var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n'

    Components.forEach(function (key) {
        if (['icon', 'option', 'option-group'].indexOf(key) > -1) return
        var fileName = key + (isSCSS ? '.scss' : '.css')
        indexContent += `@import "./${fileName}";\n`
        var filePath = path.resolve(basepath, theme, 'src', fileName)
        if(!fileExist(filePath)){ // 如果样式文件不存在
            fs.writeFileSync(filePath,'','utf8')
            console.log(theme,`创建遗漏的${fileName}文件`)
        }
    })
    //fs.writeFileSync 第一个参数是路径，第二个参数是文件内容
    fs.writeFileSync(path.resolve(basepath,theme,'src',isSCSS?'index.scss':'index.css'),indexContent)
})