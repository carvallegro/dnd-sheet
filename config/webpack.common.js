const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@styles': path.resolve(__dirname, '../src/styles/'),
      '@redux': path.resolve(__dirname, '../src/redux/'),
      '@common': path.resolve(__dirname, '../src/components/common/'),
      '@character-elements': path.resolve(__dirname, '../src/components/character-elements/')
    }
  }
}
