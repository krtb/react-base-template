module.exports = {
    mode: 'development',
    // Normalizes webpack output file, "main.js", for inspection
    devtool: false,
    devServer: {
        // In new Webpack Version, no longer "contentBase" config.
        // Needs relative path
        static: "./dist"
    }
}