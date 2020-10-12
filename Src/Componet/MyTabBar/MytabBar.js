import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import * as React from 'react';
import StyleMyTabBar from './StyleMyTabBar';

const styles = StyleMyTabBar;

const HOME = 'home';
const SETTING = 'settings';
const USER = 'user';
const FAVOURITE = 'favourite';

function MyTabBar({state, descriptors, navigation}) {
    // console.log(state, descriptors, navigation);

    function getNameIcon(label) {
        switch (label) {
            case HOME : {
                return 'home';
            }
            case SETTING : {
                return 'settings';
            }
            case USER : {
                return 'person-circle';
            }
            case FAVOURITE : {
                return 'star';
            }
        }
    }

    const views = (isFocused, label) => {
        if (isFocused) {
            return <View style={styles.warpViewFocused}>
                <Ionicons name={getNameIcon(label)} size={24} color={Colors.white}/>
                <Text style={{color: isFocused ? '#efeff1' : '#222', marginLeft: 5}}>
                    {label}
                </Text>
            </View>;
        } else {
            return <View style={styles.warpViewNotFocused}>
                <Ionicons name={getNameIcon(label)} size={24} color={Colors.warmGrey}/>
            </View>;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                {state.routes.map((route, index) => {
                    const {options} = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };


                    return (
                        <TouchableOpacity
                            key={route.name}
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.warpContainer}
                        >
                            {views(isFocused, label)}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

export default React.memo(MyTabBar);
