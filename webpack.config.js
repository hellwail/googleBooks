const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "main.js"
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
        
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                
            }
        ]
    }
};

