const webpack = require("webpack")
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        bundle: './index.js'
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'lib')
    },
    resolve: {
        extensions: ['.js']  //用于配置程序可以自行补全哪些文件后缀
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    // plugins: [
    //     new UglifyJsPlugin({
    //         uglifyOptions: {
    //             compress: {
    //                 drop_console: true,
    //                 dead_code: true,    //移除没被引用的代码
    //                 warnings: false,    //当删除没有用处的代码时，显示警告
    //                 loops: true         //当do、while 、 for循环的判断条件可以确定是，对其进行优化
    //             }
    //         },
    //         sourceMap: false
    //     })
    // ]
};