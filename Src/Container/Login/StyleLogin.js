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
        height: 54,
        backgroundColor: Colors.white,
        borderRadius: 6,
        paddingHorizontal: 27,
        shadowColor: Colors.warmGrey,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5,

        elevation: 7,
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
    txtTitle: {
        fontSize: 40,
        color: Colors.black,
    },
    warpBtnLogin: {},
    btnLogin: {
        height: 54,
        backgroundColor: Colors.black,
        width: Dimension.screenWidth - 78,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtLogin: {
        color: Colors.white,
        fontSize : 20,

    },
});
