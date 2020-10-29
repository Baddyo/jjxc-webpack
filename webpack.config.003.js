const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development', // 构建模式
    // 入口文件的另一种写法。main 是 entry 的名称
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js' // 此处的 name 引用的就是 entry 的名称，即 main
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist') // 开发服务器的启动路径
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/template.html'
        }), // 生成 dist 目录中的 index.html
    ],
    // 打包 CSS 相关配置
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};