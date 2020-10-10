import {StyleSheet} from 'react-native';
import {Colors, Dimension} from '../../Theme';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    imgBgTop: {
        width: Dimension.screenWidth,
        flex: 2.6,
    },
    imgBgBottom: {},
    wrapContent: {
        flex: 4.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputEmail: {
        width: Dimension.screenWidth - 78,
        backgroundColor: Colors.white,
        borderColor: Colors.white
    },
    wrapInput: {
        marginVertical: 36,
    },
    wrapTitle: {
        marginBottom: 13,
    },
    textForgotPassword: {
        color: Colors.warmGrey,
        fontSize: 13,
        marginVertical: 24,
    },
});
