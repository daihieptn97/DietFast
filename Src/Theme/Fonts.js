const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 20,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
};

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  OpenSansBold: {
    fontFamily: 'OpenSans-Bold',
  },
  OpenSansBoldItalic: {
    fontFamily: 'OpenSans-BoldItalic',
  },
  OpenSansExtraBold: {
    fontFamily: 'OpenSans-ExtraBold',
  },
  OpenSansExtraBoldItalic: {
    fontFamily: 'OpenSans-ExtraBoldItalic',
  },
  OpenSansLight: {
    fontFamily: 'OpenSans-Light',
  },
  OpenSansLightItalic: {
    fontFamily: 'OpenSans-LightItalic',
  },
//   fontMerriweatherBlack: {
//     fontFamily: 'OpenSans-Bold',
//   },
//   fontMerriweatherBlack: {
//     fontFamily: 'OpenSans-Bold',
//   },
//   fontMerriweatherBlack: {
//     fontFamily: 'OpenSans-Bold',
//   },
//   fontMerriweatherBlack: {
//     fontFamily: 'OpenSans-Bold',
//   },
//   fontMerriweatherBlack: {
//     fontFamily: 'OpenSans-Bold',
//   },
  small: {
    fontSize: size.small,
  },
  medium: {
    fontSize: size.medium,
  },
  regular: {
    fontSize: size.regular,
  },
  input: {
    fontSize: size.input,
  },
  h3: {
    fontSize: size.h3,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: size.h2,
  },
  h1: {
    fontSize: size.h1,
  },
  h4: {
    fontSize: size.h4,
  },
  bold: {
    fontWeight: 'bold',
  },
});
