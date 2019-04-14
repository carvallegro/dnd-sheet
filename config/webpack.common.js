const path = require('path')

const paths = require('../config/paths');

module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@enums': path.resolve(__dirname, '../src/enums/'),
      '@styles': path.resolve(__dirname, '../src/styles/'),
      '@redux': path.resolve(__dirname, '../src/redux/'),
      '@character-elements': path.resolve(__dirname, '../src/components/character-elements/'),
      '@common': path.resolve(__dirname, '../src/components/common/'),
      '@components': path.resolve(__dirname, '../src/components/'),
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),

              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
              ],
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              // Don't waste time on Gzipping the cache
              cacheCompression: false,
              compact: true,
            }
          }
        ],
      },
    ],
  }
}
