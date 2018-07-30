//entry  output  module/rules  plugins devserver

var path = require('path');

module.exports = {
    entry: './main.js',//  入口 记得和你根目录下的main匹配 起什么自己定
    output: {//出口
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js'
    },
    module: {
        rules: [//loaders要换成rules
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']//还要解析react语法
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
        ]
    },
        devServer: {//和moudel平级
            contentBase: path.join(__dirname, "dist"),//监听dist没有
            //index  要复制一份到dist
            compress: true,
            port: 9000,
            inline:true//热更新
        }
};
