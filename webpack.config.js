var path = require('path')
var webpack = require('webpack')

const scriptsPath = path.resolve(__dirname, 'data');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.json', '.css', '.scss']
    },
    devServer: {
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }]
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'raw-loader'
            }, {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },  {
                test: /\.scss?$/,
                loader: 'style!css!sass'
            }
        ]
    }
}