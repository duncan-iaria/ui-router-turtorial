const path = require( 'path' );

module.exports =
{
    entry: './app/app.js',

    output:
    {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'app/build/' )
    },

    module:
    {
        rules:
        [
            //CSS BUILD
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            //SASS BUILD
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            //BABEL
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            //FONTS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ 'file-loader' ]
            }
        ]
    }
};