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
          '@/sheets': ['src/sheets'],
          '@/navigations': ['src/navigations'],
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};

// react-native-reanimated has to be listed last.
