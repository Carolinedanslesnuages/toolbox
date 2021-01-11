const publicPath = process.env.NODE_ENV === 'production'
  ? process.env.PUBLIC_PATH || '/'
  : '/'

const apiHost = process.env.app_API_HOST || 'localhost'
const apiPort = process.env.app_API_PORT || 4000

module.exports = {
  publicPath,

  devServer: {
    proxy: {
      '^/api': {
        target: `http://${apiHost}:${apiPort}`,
        ws: true,
        changeOrigin: true,
      },
    },
  },

  configureWebpack: {
    devtool: 'source-map',
  },

  chainWebpack (config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'condense'
        return options
      })

    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },

  pwa: {
    name: 'app',
    themeColor: '#5770be',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    /*
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    },
    */

    iconPaths: {
      favicon32: 'favicons/favicon-32x32.png',
      favicon16: 'favicons/favicon-16x16.png',
      appleTouchIcon: 'favicons/apple-touch-icon.png',
      appleTouchIcon120: 'favicons/apple-touch-icon-120x120.png',
      appleTouchIcon120Precomposed: 'favicons/apple-touch-icon-120x120-precomposed.png',
      appleTouchIconPrecomposed: 'favicons/apple-touch-icon-precomposed.png',
      maskIcon: 'favicons/safari-pinned-tab.svg',
      androidChrome192: 'favicons/android-chrome-192x192.png',
      androidChrome512: 'favicons/android-chrome-512x512.png',
      mstile: 'favicons/mstile-150x150.png',
    },
  },
}
