module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                // regex
                test: /\.js$/i,
                // memory expensive to runa against all node files
                exclude: /node_modules/,
                // tell webpack to use .babel.rc file, with configs
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    // Normalizes webpack output file, "main.js", for inspection
    devtool: false,
    devServer: {
        // In new Webpack Version, no longer "contentBase" config.
        // Needs relative path
        static: "./dist"
    }
}