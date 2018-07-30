// entry             入口文件
// output            出口文件
// module/rules      模块
// plugins           插件
// devserver         热更新
var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015','react']
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
	      }
	  ]
	},
	devServer: {
	  contentBase: path.join(__dirname, "dist"),    //只能监听html文件
	  compress: true,
	  port: 9000,
	  inline:true     //开启热更新
	}
};