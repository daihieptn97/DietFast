import {Image, View} from 'react-native';
import {Colors, Dimension, Images} from '../../Theme';
import React, {useEffect, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import StyleSlide from './StyleSlide';
import {ConstSlideScreen} from './ConstSlide';

function SlideImage({setIndexSlide, index, byScreen, setByScreen}) {
    const data = [Images.slide1, Images.slide2, Images.slide3];
    const carouselRef = useRef('');

    const _renderItem = ({item}) => {
        return <View style={styles.slide1}>
            <Image source={item} style={styles.imgSlide}/>
        </View>;
    };

    useEffect(() => {
        carouselRef.current.snapToItem(index);
        console.log("aaaa");
    }, [index]);

    return <View style={{backgroundColor: Colors.transparent, flex: 7, height: 400}}>
        <Carousel
            ref={carouselRef}
            autoplay={true}
            autoplayInterval={3000}
            loop={true} layout={'tinder'}
            onSnapToItem={(e) => {
                if (byScreen === ConstSlideScreen.SLIDE) {
                    setIndexSlide(e);
                    setIndexSlide(ConstSlideScreen.SLIDE);
                    console.log('SlideImage');
                }
            }}
            data={data}
            renderItem={_renderItem}
            sliderWidth={Dimension.screenWidth}
            itemWidth={Dimension.screenWidth}
        />
    </View>;
}

export default React.memo(SlideImage);

const styles = StyleSlide;
