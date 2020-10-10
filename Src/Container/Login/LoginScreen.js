import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import StyleLogin from './StyleLogin';
import {Colors, Fonts, Images} from '../../Theme';
import {TextInput} from 'react-native-paper';

const styleLogin = StyleLogin;

function LoginScreen() {
    return <View style={styleLogin.container}>
        <View style={styleLogin.imgBgTop}>
            <Image source={Images.bgTopLogin} style={{width: '100%', height: '100%'}}/>
        </View>
        <View style={styleLogin.wrapContent}>

            <View style={styleLogin.wrapTitle}>
                <Text style={[Fonts.fontOpenSansBold, {fontSize: 40, color: Colors.black}]}>Welcome</Text>
            </View>

            <View style={styleLogin.wrapInput}>
                <TextInput
                    mode={'outlined'}
                    style={styleLogin.inputEmail}
                    label="Email"
                    value={''}
                    onChangeText={text => null}
                />
            </View>

            <View>
                <TextInput
                    mode={'outlined'}
                    style={styleLogin.inputEmail}
                    label="Passowrd"
                    value={''}
                    onChangeText={text => null}
                />
            </View>

            <Text style={[styleLogin.textForgotPassword, Fonts.fontOpenSansRegular]}>Forgot you Password?</Text>

            <View>
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styleLogin.imgBgTop}>
            <Image source={Images.bgBottomLogin} style={{width: '100%', height: '100%'}}/>
        </View>

    </View>;
}

export default React.memo(LoginScreen);
