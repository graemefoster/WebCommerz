//Thanks Jake - https://github.com/AdaptiveConsulting/react-adaptive-trader/blob/master/webpack.config.js
//   :o)
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var dependencies = require('./getVendorDependencies.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = process.env.NODE_ENV || 'development'

// Copy index to served folder.
var copyDirs = ['./dist', './dist/test-data', './dev-server', './dev-server/test-data/'];
copyDirs.forEach(function (dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

fs.writeFileSync('./dist/index.html', fs.readFileSync('./src/index.html'), {flag: 'w+'});
fs.writeFileSync('./dist/test-data/featured-items.js', fs.readFileSync('./src/test-data/featured-items.js'), {flag: 'w+'});
fs.writeFileSync('./dev-server/index.html', fs.readFileSync('./src/index.html'), {flag: 'w+'});
fs.writeFileSync('./dev-server/test-data/featured-items.js', fs.readFileSync('./src/test-data/featured-items.js'), {flag: 'w+'});

var env = process.env.NODE_ENV || 'development';
var isProduction = env.trim().toUpperCase() === 'PRODUCTION';
var isDevelopment = !isProduction;
var entryPoints = [
  './src/main.jsx'
];

//only start the hot-server if we are in development
if(isDevelopment) {
  console.log('detected development - will use hot-reload');
  entryPoints.push('webpack-dev-server/client?http://localhost:8090');
}

module.exports = {
  entry: {
      app: entryPoints,
      vendor: dependencies
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'site.js'
  },
  module: {
    preLoaders: [
      {
        test: /(\.js$|\.jsx$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.js[x]$/, exclude: /(node_modules|config)/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.(less|css)$/, loader: ExtractTextPlugin.extract('style-loader', 'css!less') },
      { test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  },
  eslint: {
      configFile: '.eslintrc'
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: './dev-server',
    hot: isDevelopment,
    inline: true
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
     new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin( { $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' }),
    new ExtractTextPlugin('styles.css')
   ]
};
