const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: 'development', // 构建模式
    // 入口文件的另一种写法。main 是 entry 的名称
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js' // 此处的 name 引用的就是 entry 的名称，即 main
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist') // 开发服务器的启动路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html'
        }), // 生成 dist 目录中的 index.html
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }), // 把 CSS 分离为单独的文件，而不是插入到 <style> 标签中。
    ],
    // 打包 CSS 相关配置
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, // 此插件要干涉模块转换的内容，所以要使用它的 loader
                'css-loader'
            ]
        }, {
            test: /\.(jpg|png|gif)$/,
            include: [path.resolve(__dirname, 'src')],
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        },{
            test: /\.jsx?$/, // 支持 js 和 jsx
            include: [path.resolve(__dirname, 'src')],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            ]
        }]
    }
};