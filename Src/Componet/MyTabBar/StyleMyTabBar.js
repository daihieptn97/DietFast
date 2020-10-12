import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    wrap: {
        flexDirection: 'row',
        // height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 30,
        marginHorizontal: 78,
        paddingHorizontal: 12,
        paddingTop : 16
    },
    warpViewFocused: {
        flexDirection: 'row',
        backgroundColor: Colors.softGreen,
        borderRadius: 15,
        padding: 6,
        alignItems: 'center',
        width: 100,
        height: 33,
        justifyContent: 'center',
    },
    warpViewNotFocused: {
        width: 100,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
    warpContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
