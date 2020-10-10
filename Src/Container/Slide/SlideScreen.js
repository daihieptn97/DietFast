import React from 'react';
import {Image, ImageBackground, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Fonts, Images} from '../../Theme';
import DotSlideScreen from '../../Componet/DotSlide/DotSlideScreen';
import Slide1 from './SlideImage';
import StyleSlide from './StyleSlide';
import ContentSlide from './ContentSlide';
import {ConstSlideScreen} from './ConstSlide';

function SlideScreen() {

    const [indexSlide, setIndexSlide] = React.useState(0);
    const [byScreen, setByScreen] = React.useState(ConstSlideScreen.SLIDE);

    return <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'}/>
        <Slide1 setIndexSlide={setIndexSlide}
                index={indexSlide}
                byScreen={byScreen}
                setByScreen={setByScreen}
        />
        <View style={styles.wrapContent}
            // pointEvents={'none'}
        >
            <View style={{position: 'relative', backgroundColor: '#f4f5fa', flex: 1}}>
                <Image source={Images.bgSlideGreen} style={styles.imgBgGreen}/>
                <ImageBackground source={Images.bgSlideWhite} style={[styles.imgBgGreen, {top: '-93%'}]}>
                    <View style={styles.partTopView}/>
                    <View style={styles.wrapInformation}>
                        <DotSlideScreen indexActive={indexSlide}/>
                        <ContentSlide index={indexSlide}
                                      setIndexSlide={setIndexSlide}
                                      byScreen={byScreen}
                                      setByScreen={setByScreen}
                        />

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

const styles = StyleSlide;

export default React.memo(SlideScreen);
