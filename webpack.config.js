const path = require('path');

module.exports = {
    mode: 'development', // 构建模式
    entry: './src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'final.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist') // 开发服务器的启动路径
    },
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