const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack')

module.exports = merge(common, {

    mode: "production",
    module: {

        rules: [

            {
                test: /\.s[ac]ss$/i,

                use: ["style-loader", "css-loader", "sass-loader"]

            },
            {
                test: /\.css$/i,

                use: ["style-loader", "css-loader"]

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: './img'
                        }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,

                use: {

                    loader: 'babel-loader',

                    options: {

                        presets: ['@babel/preset-env', '@babel/preset-react', 'mobx'],

                    }
                },
                exclude: /node_modules/

            },
            {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {

        extensions: [".js", ".jsx",'.ts', '.tsx']

    },
    optimization: {
        minimize: true,
        usedExports: true,
        concatenateModules: true,
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        // new webpack.DefinePlugin({
        //     "process.env.NODE_ENV": "production"
        // })
    ],
    devtool: 'none'

});