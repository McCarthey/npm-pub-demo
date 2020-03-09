const webpack = require("webpack")
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    // mode: 'development',
    entry: {
        bundle: './index.js'
    },
    output: {
        filename: "index.js",
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib')
    },
    resolve: {
        extensions: ['.js']  //用于配置程序可以自行补全哪些文件后缀
    },
    module: {
        rules: [
            {
                test: /\.js$/,      // 匹配js文件，然后用下面所配置的工具对这些文件进行编译处理
                use: {
                    loader: 'babel-loader',     // babel的核心模块
                    options: {
                        presets: [              // 配置babel的预设，将ES语法转成ES5语法
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    }
};