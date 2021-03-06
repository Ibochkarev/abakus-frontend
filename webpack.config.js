const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            "jQuery": "jquery",
            "window.jQuery": "jquery",
            "jquery": "jquery",
            "$": "jquery",
            "window.$": "jquery"
        })
    ],
    node: {
        fs: "empty",
        tls: "empty",
        net: "empty",
    },
    entry: {
        global: "./src/js/global.js",
        homepage: "./src/js/homepage.js",
        programs: "./src/js/programs.js",
        arithmetic: "./src/js/arithmetic.js",
        teams: "./src/js/arithmetic.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%sections%": path.resolve(__dirname, "src/blocks/sections"),
            "%components%": path.resolve(__dirname, "src/blocks/components")
        }
    }
};
