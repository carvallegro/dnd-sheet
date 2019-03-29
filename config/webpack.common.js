const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@enums': path.resolve(__dirname, '../src/enums/'),
      '@styles': path.resolve(__dirname, '../src/styles/'),
      '@redux': path.resolve(__dirname, '../src/redux/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@common': path.resolve(__dirname, '../src/components/common/'),
      '@character-elements': path.resolve(__dirname, '../src/components/character-elements/')
    }
  }
}
