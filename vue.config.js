/*
	Vue-CLI project's core profile
*/
const webpack = require("webpack");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: "./",
  // outputDir: "dist", 
  // assetsDir: "static",
  // indexPath: "index.html",
  // filenameHashing: true,

  chainWebpack: config => {
      config.resolve.alias
        .set("@", resolve("src"))
    },

	devServer: {
        host: '192.168.43.13',
        port: 8080,
        https: false,
        hotOnly: false,

        proxy:"http://apis.juhe.cn/"
  	},

	// set pwa to load the web icon
    pwa: {
      iconPaths: {
        favicon32     : 'faviconfc.ico',
        favicon16     : 'faviconfc.ico',
        appleTouchIcon: 'faviconfc.ico',
        maskIcon      : 'faviconfc.ico',
        msTileImage   : 'faviconfc.ico'
      }
    },

    // set the third party plugins: "jquery"
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
				Popper: ["popper.js", "default"]
			})
		]
	}

};