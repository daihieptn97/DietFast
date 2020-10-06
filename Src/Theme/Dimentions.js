import {Dimensions} from 'react-native';

export default {
    screenWidth: Math.round(Dimensions.get('window').width),
    screenHeight: Math.round(Dimensions.get('window').height),
};
