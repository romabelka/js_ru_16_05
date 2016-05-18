var path = require('path')
var webpack = require('webpack')

const scriptsPath = path.resolve(__dirname, 'data');

module.exports = {
    devtool: 'eval',
    entry: {
        // main: path.join(scriptsPath, 'index.js'),
        app: path.join(__dirname, '/src/app.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
        resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.json', '.css']
    },
    module: {
        loaders: [
            {   test: /\.json?$/,
                loader: 'json'
            }, {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}