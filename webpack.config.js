let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: './js/build.js'
	},
	watch: true,
	module: {
	    rules: [
	        {
		        test: /\.jsx$/,
		        exclude: /node_modules/,
		        use: {
		          loader: "babel-loader"
		        }
	        }
	    ]
    }/*,
	plugins: [
	    new BrowserSyncPlugin({
	    	host: 'localhost',
	    	port: 3000,
	    	files: ['./dist/*.html', './dist/css/*css', './dist/js/*.js', './dist/js/*.jsx'],
	    	server: { baseDir: ['dist'] }
	    })
	]*/
}