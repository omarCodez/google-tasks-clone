module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/assets': 'src/assets',
          '@/components': 'src/components',
          '@/constants': 'src/constants',
          '@/screens': 'src/screens',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

// react-native-reanimated has to be listed last.
