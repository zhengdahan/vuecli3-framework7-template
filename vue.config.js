const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 8094,
        // proxy: 'http://localhost:3389'
    },
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        "remUnit": 37.5,
                    })
                ]
            }
        }
    }

}