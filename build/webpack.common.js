const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:"production",
    entry:{
        app:['./src/index.js']
    },
    output:{
        // process.cwd()是指当前node命令执行时所在的文件夹目录 
        path:path.resolve(process.cwd(),'./lib'),  // 项目打包后存放的目录
        publicPath:'/dist/',// 静态文件打包存放的目录
        filename:'Ben-ui.common.js',
        library:"BenUI",
        libraryTarget:"commonjs2"
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader",
                options:{
                    compilerOptions:{
                        preserveWhitespace:false
                    }
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]

}