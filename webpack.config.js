import path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'dist'),
    },
    devtool: 'eval-source-map',
    devServer: {
        static: 'dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
}