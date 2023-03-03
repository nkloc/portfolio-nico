module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Nicolas KLOC, Product Manager";
                return args;
            })
    }
}