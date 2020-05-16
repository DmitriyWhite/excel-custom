const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autofix = require('autoprefixer')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'cache-loader'
        },
        {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-proposal-private-methods'
                ]
            }
        }
    ]

    if (isDev) {
        loaders.push('eslint-loader')
    }

    return loaders
}

const cssLoaders = () => {
    return [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            },
        },
        {
            loader: 'cache-loader'
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: isDev,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    autofix({
                        grid: 'autoplace'
                    })
                ],
                sourceMap: isDev
            }
        }
    ]
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        moduleIds: 'hashed',
        runtimeChunk: 'single',
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './app.js']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
                removeComments: isProd
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        })
    ],
    optimization: optimization(),
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: jsLoaders()
            },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                include: path.resolve(__dirname, 'src'),
                use: [...cssLoaders(),
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev
                        }
                    },
                    {
                        loader: 'sass-bulk-import-loader'
                    }
                ]
            },
        ]
    }
}
