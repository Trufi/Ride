const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
const path = require('path');

const production = process.env.NODE_ENV === 'production';
const plugins = [new VueLoaderPlugin()];

if (production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
}

module.exports = {
    module: {
        rules: [{
            test: /(\.vue)$/,
            exclude: /node_modules/,
            use: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ],
        }],
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['.vue', '.js'],
    },

    entry: './src/index.js',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
    },

    plugins,

    devtool: 'source-map',

    devServer: {
        host: '0.0.0.0',
        port: 3000,
        stats: {
            modules: false,
        },
        disableHostCheck: true,
    },
};
