import {Image, StyleSheet, View} from 'react-native';
import {Colors, Dimension, Images} from '../../Theme';
import Swiper from 'react-native-swiper';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

function Slide1({setIndexSlide}) {
    const data = [Images.slide1, Images.slide2, Images.slide3];

    const _renderItem = ({item}) => {
        return <View style={styles.slide1}>
            <Image source={item} style={styles.imgSlide}/>
        </View>;
    };
    return <View style={{backgroundColor: Colors.red, flex: 7, height: 400}}>
        <Carousel autoplay={true} autoplayInterval={3000} loop={true} layout={'tinder'}
                  onSnapToItem={(e) => {
                      setIndexSlide(e);
                  }}
                  data={data}
                  renderItem={_renderItem}
                  sliderWidth={Dimension.screenWidth}
                  itemWidth={Dimension.screenWidth}
        />
    </View>;
}

export default React.memo(Slide1);

const styles = StyleSheet.create({
    wrapContent: {flex: 3, backgroundColor: Colors.transparent, zIndex: 1},
    partTopView: {flex: 5, zIndex: -1},
    wrapInformation: {flex: 5, justifyContent: 'center', marginHorizontal: 45},
    txtTitle: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: Dimension.screenHeight * 0.02,
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
