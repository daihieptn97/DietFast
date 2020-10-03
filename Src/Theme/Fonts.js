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
  fontOpenSansBold: {
    fontFamily: 'OpenSans-Bold',
  },
  fontOpenSansBoldItalic: {
    fontFamily: 'OpenSans-BoldItalic',
  },
  fontOpenSansExtraBold: {
    fontFamily: 'OpenSans-ExtraBold',
  },
  fontOpenSansExtraBoldItalic: {
    fontFamily: 'OpenSans-ExtraBoldItalic',
  },
  fontOpenSansLight: {
    fontFamily: 'OpenSans-Light',
  },
  fontOpenSansLightItalic: {
    fontFamily: 'OpenSans-LightItalic',
  },
  fontOpenSansRegular: {
    fontFamily: 'OpenSans-Regular',
  },
  fontOpenSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold',
  },
  fontOpenSansSemiBoldItalic: {
    fontFamily: 'OpenSans-SemiBoldItalic',
  },
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
