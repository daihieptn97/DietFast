import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, Dimension} from '../../Theme';

function DotSlideScreen({indexActive}) {
    let arr = [0, 1, 2];
    return <View style={styles.wrapDot}>
        {
            arr.map(i => {
                return <View key={i}
                             style={[styles.dot, {backgroundColor: indexActive === i ? Colors.active : Colors.deActive}]}/>;
            })
        }
    </View>;

}

const styles = StyleSheet.create({
    wrapDot: {
        flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center', marginVertical: Dimension.screenHeight * 0.02,
    },
    dot: {
        width: 10,
        height: 10,
        margin: 6,
        borderRadius: 10,
    },
});
// function areEqual(prevProps, nextProps) {
//     console.log(prevProps, nextProps);
//     return (prevProps.indexActive === nextProps.indexActive);
// }

export default React.memo(DotSlideScreen);
