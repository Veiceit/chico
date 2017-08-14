webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


webpackConfig = {
    context: __dirname,
    entry: {
        bundle: './src/app.js',
        styles: './src/main.scss'
    },
    output: {
        filename: '[name].js',
        path:  __dirname + '/dist',
        library: '[name]'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout'
        }
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "react-hot-loader!babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
};
module.exports = webpackConfig;