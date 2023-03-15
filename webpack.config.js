const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'tolam',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            // {
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     template: 'public/index.html',
        //     favicon: 'public/favicon.ico',
        // }),
        // new MiniCssExtractPlugin(),
    ],
    devtool: 'source-map',
    mode: 'production',
};
