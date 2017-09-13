var webpack = require('webpack');
var folder = __dirname;

module.exports = {
    entry: "./src/sbootstrap.js",
    output: {
        path: folder + "/build/dist",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.css$/,
                loader: [ 'style-loader', 'css-loader' ]
            }
        ]

    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            tether: 'tether',
            Tether: 'tether',
            'window.Tether': 'tether',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};