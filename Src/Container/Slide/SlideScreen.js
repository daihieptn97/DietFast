import React from 'react';
import {Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Dimension, Fonts, Images} from '../../Theme';
import Swiper from 'react-native-swiper';
import DotSlideScreen from '../../Componet/DotSlide/DotSlideScreen';
import Slide1 from './Slide1';

let ind =0
function SlideScreen() {

    const [indexSlide, setIndexSlide] = React.useState(0);


    const memoizedValue = React.useMemo(() => {

    }, []);
    console.log("111111");
    return <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'}/>
        <Slide1 setIndexSlide={setIndexSlide}/>
        <View style={styles.wrapContent}>
            <View style={{position: 'relative', backgroundColor: '#f4f5fa', flex: 1}}>
                <Image source={Images.bgSlideGreen} style={styles.imgBgGreen}/>
                <ImageBackground source={Images.bgSlideWhite} style={[styles.imgBgGreen, {top: '-93%'}]}>
                    <View style={styles.partTopView}/>
                    <View style={styles.wrapInformation}>
                        <DotSlideScreen indexActive={indexSlide}/>
                        <Text style={[Fonts.fontOpenSansBold, styles.txtTitle]}>
                            best tips for your diet
                        </Text>
                        <Text
                            style={styles.txtDescription}>
                            Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut
                            molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis s.
                        </Text>

                        <View style={styles.controlWrap}>
                            <TouchableOpacity style={styles.btnSkip}>
                                <Text>Skip step</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonNext}>
                                <Text style={[{color: 'white'}, Fonts.fontOpenSansRegular]}>Next</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>

            </View>
        </View>
    </View>;
}

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

export default React.memo(SlideScreen);
