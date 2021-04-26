const webpack = require('webpack')

const common = require('./webpack.common.js');
const path = require('path')
const merge = require('webpack-merge');


module.exports = merge(common, {

    mode: "development",

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
                        loader : 'file-loader',
                        options : {
                            name : '[path][name].[ext]',
                            outputPath : './img'
                        }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,

                use: {

                    loader: 'babel-loader',

                    options: {

                        presets: ['@babel/preset-env', '@babel/preset-react','mobx'],

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
    devtool: 'cheap-module-eval-source-map',

    devServer: {

        // contentBase: './dist', //服务开启的文件夹位置
        contentBase: path.join(__dirname, 'public'),
        host: 'localhost',

        port: '8080',

        open: true, //是否自动打开页面
        hot: true,
        historyApiFallback: true,

        
        // proxy : {   //代理
        //     '/api' : {
        //         target : 'https://api.github.com',
        //         pathRewrite : {
        //             '^/api' : ''
        //         },
        //         changeOrigin : true
        //     }
        // }
    },
    plugins: [

        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({

            "process.env": { NODE_ENV: '"development"' }

        })
    ],
})