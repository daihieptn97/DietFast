import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    StatusBar,
    ImageBackground,
    Dimensions,
} from 'react-native';
import {Colors, Fonts} from '../../Theme';
import Swiper from 'react-native-swiper';
import {Images} from '../../Theme';

const screenWidth = Math.round(Dimensions.get('window').width);

function SlideScreen() {
    return <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'}/>
        <View style={{backgroundColor: Colors.red, flex: 7, height: 400}}>
            <Swiper style={styles.wrapper} autoplay={false}
                    dot={
                        <View style={{
                            backgroundColor: 'rgb(49,52,51)',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                            zIndex: 10,
                            position: 'absolute',
                        }}/>
                    }
                    activeDot={
                        <View
                            style={{
                                backgroundColor: '#3a8633',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3,
                            }}
                        />
                    }
            >
                <View style={styles.slide1}>
                    <Image source={Images.slide2} style={styles.imgSlide}/>
                </View>
                <View style={styles.slide1}>
                    <Image source={Images.slide1} style={styles.imgSlide}/>
                </View>
                <View style={styles.slide1}>
                    <Image source={Images.slide3} style={styles.imgSlide}/>
                </View>
            </Swiper>
        </View>
        <View style={{backgroundColor: Colors.grey01, flex: 3}}>
            <View style={{position: 'relative', backgroundColor: '#f4f5fa', flex: 1}}>
                <Image source={Images.bgSlideGreen} style={styles.imgBgGreen}/>
                <ImageBackground source={Images.bgSlideWhite} style={[styles.imgBgGreen, {top: '-98%'}]}>
                    <View style={{flex: 5}}/>
                    <View style={{flex: 5, justifyContent: 'center', marginHorizontal: 45}}>
                        <Text style={[Fonts.fontOpenSansBold, {
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: screenWidth * 0.05,
                        }]}>
                            best tips for your diet
                        </Text>

                        <Text
                            style={[{
                                color: '#a5a5a5',
                                fontSize: 10,
                                textAlign: 'center',


                            }]}>
                            Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut
                            molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis s.
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: screenWidth * 0.15,
                        }}>


                            <TouchableOpacity style={{
                                width: 115,
                                height: 42,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                            }}>
                                <Text>Skip step</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    width: 115,
                                    height: 42,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#6cc57c',
                                    borderRadius: 6,
                                }}>
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
        width: '100%',
        height: '200%',
        position: 'absolute',
        top: '-110%',
        right: 0,
        left: 0,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default React.memo(SlideScreen);
