import React from 'react';
import {View, TouchableOpacity, Text, Image, StatusBar} from 'react-native';
import {Colors, Dimension, Fonts, Images} from '../../Theme';
import StyleLogin from '../Login/StyleLogin';
import StyleMyTabBar from '../../Componet/MyTabBar/StyleMyTabBar';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const styleLogin = StyleLogin;

function HomeScreen() {

    return <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'}/>
        <View style={styleLogin.imgBgTop}>
            <Image source={Images.homeTopBg}
                   style={{width: Dimension.screenWidth, height: 119}}/>
        </View>
        <View style={{flex: 8}}>


            <View style={StyleMyTabBar.rowFlexDirection}>
                <View>
                    <Text style={Fonts.fontOpenSansBold}>Activity</Text>
                    <Icon name={'arrow-down'} color={Colors.black} size={23}/>
                </View>
            </View>


        </View>
    </View>;
}

export default React.memo(HomeScreen);
