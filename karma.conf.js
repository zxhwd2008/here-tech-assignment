var webpackConfig = require('./webpack.config.dev.js')
webpackConfig.devtool = 'inline-source-map'

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    // karma only needs to know about the test bundle
    files: [
      'src/test/tests.bundle.js'
    ],
    frameworks: [ 'chai', 'mocha', 'sinon' ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'src/test/tests.bundle.js': [ 'webpack', 'sourcemap' ],
    },
    reporters: [ 'dots' ],
    singleRun: true,
    // webpack config object
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  })
}