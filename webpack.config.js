const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './public/webpack/index.js',
    output: {
        path: __dirname,
        filename: 'dist/js/[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'public')
            },
            //{
            //    test: /\.css$/,
            //    loader: 'style-loader!css-loader?importLoader=1!postcss-loader'
            //}
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader'
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () { return [require('autoprefixer')({broswers: ['last 5 versions']})]; }
                    }
                }]
            },
            {
                test: /\.less$/,
                use: ['style-loader', {
                    loader: 'css-loader'
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () { return [require('autoprefixer')({broswers: ['last 5 versions']})]; }
                    }
                }, 'less-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.jade$/,
                loader: 'jade-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)/,
                loader: 'file-loader'
            }
        ]
    },
    //postcss: [
    //    require('autoprefixer')({
    //        broswers: ['last 5 versions']
    //    })
    //],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'views/index.html',
            template: 'public/index.html',
            inject: 'body',
            title: 'study webpack'
        })
    ]
};