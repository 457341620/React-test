

var path = require('path');

module.exports = {
		//入口文件
	  entry: './main.js',
	  //出口文件
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    //打包好以后的文件名
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
			        test: /\.(png|jpg|gif|webp)$/,
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
		  contentBase: path.join(__dirname, "dist"),
		  compress: true,
		  port: 9000,
		  inline:true
	}   
	  
  
  
  
  
};