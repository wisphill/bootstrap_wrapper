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
                loader: ['babel-loader?presets[]=es2015',
                   // './src/wrapper/Base/Base.js'
                    ]
            }
        ]

    }
};