const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const ModuleFedrationPlugin  = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("../package.json")

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode:"production",
    output:{
        filename:'[name].[contenthash].js',
        publicPath:"/auth/latest/"
    },
    plugins:[
        new ModuleFedrationPlugin({
            name:"container",
            remotes:{
                auth:`auth@${domain}/auth/latest/remoteEntry.js`
            },
            shared:packageJson.dependencies
        })
    ]
}


module.exports = merge(commonConfig,prodConfig)