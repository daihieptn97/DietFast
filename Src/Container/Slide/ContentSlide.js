import React, {useRef, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {Colors, Dimension, Fonts} from '../../Theme';
import StyleSlide from './StyleSlide';
import Carousel from 'react-native-snap-carousel';
import {ConstSlideScreen} from './ConstSlide';

const styles = StyleSlide;

function ContentSlide({index, setIndexSlide, byScreen, setByScreen}) {

    let data = [
        {
            title: 'best tips for your diet',
            content: 'Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut\n' +
                '            molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis s.',
        },
        {
            title: 'WINNING GAME DAY DINNER RECIPES',
            content: 'Cut potatoes in half lengthwise; scoop out pulp and discard (or save for another use) leaving 1/4-inch shell.',
        },
        {
            title: 'PHILLY CHEESESTEAK PIZZA',
            content: 'In large skilled, saute the peppers, mushrooms, and onion in oil until tender; add garlic.',
        },
    ];
    let checkSetByThisScreen = false;
    const carouselRef = useRef('carousel');
    const _renderItem = ({item}) => {
        return <View style={{backgroundColor: Colors.background}}>
            <Text style={[Fonts.fontOpenSansBold, styles.txtTitle]}>{item.title}</Text>
            <Text style={styles.txtDescription}>{item.content}</Text>
        </View>;
    };

    useEffect(() => {
        carouselRef.current.snapToItem(index);
        console.log('bbbb');
    }, [index]);

    return <View style={{backgroundColor: Colors.background, flex: 7, height: 400}}>
        <Carousel
            // loop={true}
            ref={carouselRef}
            onSnapToItem={(e) => {
                if (byScreen === ConstSlideScreen.CONTENT) {
                    setIndexSlide(e);
                    setByScreen(ConstSlideScreen.CONTENT);
                }
            }}
            data={data}
            renderItem={_renderItem}
            sliderWidth={Dimension.screenWidth - 28}
            itemWidth={Dimension.screenWidth - 28}
        />
    </View>;

}

export default React.memo(ContentSlide);
