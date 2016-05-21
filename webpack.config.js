var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
    context: path.join(__dirname, '/src'),
    build: path.join(__dirname, '/build'),
    nodeModules: path.join(__dirname, '/node_modules')
};

var config = {
    context: paths.context,
    entry: {
        app: [
            './scripts/core/bootstrap.js'
        ],
        vendor: [
            'angular',
            'angular-ui-router',
            'angular-ui-bootstrap',
            'oclazyload',
            'lodash',
            'font-awesome/scss/font-awesome.scss',
            './styles/main.scss',
            'bootstrap-webpack!./styles/config/bootstrap.config.js'
        ]
    },
    output: {
        path: paths.build,
        filename: 'app.bundle.[hash].js',
        chunkFilename: "[name].bundle.[hash].js",
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate'
        }, {
            test: /\.css$/,
            // loader: "style!css"
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.less$/,
            // loader: 'style!css!less'
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.scss$/,
            // loader: 'style!css!sass'
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff&name=./fonts/[hash].[ext]'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream&name=./fonts/[hash].[ext]'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file?name=./fonts/[hash].[ext]'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml&name=./images/[hash].[ext]'
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'file?hash=sha512&digest=hex&name=./images/[hash].[ext]'
        }],
    },
    plugins: [
        new OpenBrowserPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            showErrors: true,
            title: 'COACH OC',
            template: './index.ejs',
            favicon: './imgs/favicon.png'
        }),
        new webpack.DefinePlugin({
            PROCESS_CWD: JSON.stringify(process.cwd())
        }),
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: "[name].bundle.[hash].js",
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("./styles/[name].[hash].css")
    ],
    resolve: {
        alias: {
            loader$: paths.context + "/scripts/core/loader.js"
        }
    },
    devtool: "#eval",
    devServer: {
        hot: true,
        inline: true
    }
};

module.exports = config;

//https://webpack.github.io/analyse/
