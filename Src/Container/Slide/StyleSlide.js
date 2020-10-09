import {StyleSheet} from 'react-native';
import {Colors, Dimension} from '../../Theme';

export default StyleSheet.create({
    wrapContent: {flex: 3, backgroundColor: Colors.transparent, zIndex: 1},
    partTopView: {flex: 5, zIndex: -1},
    wrapInformation: {flex: 5, justifyContent: 'center', marginHorizontal: 45},
    txtTitle: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: Dimension.screenHeight * 0.02,
        textTransform : 'uppercase'
    },
    txtDescription: {
        color: '#a5a5a5',
        fontSize: 10,
        textAlign: 'center',
    },
    controlWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Dimension.screenHeight * 0.05,
    },
    btnSkip: {
        width: 115,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    buttonNext: {
        width: 115,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.active,
        borderRadius: 6,
    },
    wrapper: {
        // flex: 1,
        zIndex: 10,
    },
    slide1: {
        flex: 1,
        backgroundColor: '#9DD6EB',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    imgSlide: {
        resizeMode: 'cover',
        height: '110%',
        width: '105%',
    },
    imgBgGreen: {
        width: Dimension.screenWidth,
        height: Dimension.screenWidth,
        position: 'absolute',
        top: '-100%',
        right: 0,
        left: 0,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
