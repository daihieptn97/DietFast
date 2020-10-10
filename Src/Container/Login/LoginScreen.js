import React from 'react';
import {View, Image, TouchableOpacity, Text, TextInput, StatusBar} from 'react-native';
import StyleLogin from './StyleLogin';
import {Colors, Fonts, Images} from '../../Theme';
// import {TextInput} from 'react-native-paper';

const styleLogin = StyleLogin;

function LoginScreen() {

    const [email, setEmail] = React.useState('thiccodeui.hiep@gmail.com');
    const [password, setPassword] = React.useState('studious123');

    return <View style={styleLogin.container}>
        <StatusBar barStyle={'light-content'}/>
        <View style={styleLogin.imgBgTop}>
            <Image source={Images.bgTopLogin} style={{width: '100%', height: '100%'}}/>
        </View>
        <View style={styleLogin.wrapContent}>

            <View style={styleLogin.wrapTitle}>
                <Text style={[Fonts.fontOpenSansBold, styleLogin.txtTitle]}>Welcome</Text>
            </View>

            <View style={styleLogin.wrapInput}>
                <TextInput
                    keyboardType={'email-address'}
                    placeholderTextColor={Colors.black}
                    style={styleLogin.inputEmail}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View>
                <TextInput
                    secureTextEntry={true}
                    placeholderColor={Colors.black}
                    style={styleLogin.inputEmail}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <TouchableOpacity>
                <Text style={[styleLogin.textForgotPassword, Fonts.fontOpenSansRegular]}>Forgot you Password?</Text>
            </TouchableOpacity>

            <View style={styleLogin.warpBtnLogin}>
                <TouchableOpacity style={styleLogin.btnLogin}>
                    <Text style={[styleLogin.txtLogin, Fonts.fontOpenSansBold]}>Login</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{flexDirection: 'row'}}>
                <Text style={[styleLogin.textForgotPassword, Fonts.fontOpenSansRegular]}>Don't have an account?</Text>
                <Text style={[Fonts.fontOpenSansBold, styleLogin.textForgotPassword]}>Sign up</Text>
            </TouchableOpacity>


        </View>

        <View style={styleLogin.imgBgTop}>
            <Image source={Images.bgBottomLogin} style={{width: '100%', height: '100%'}}/>
        </View>

    </View>;
}

export default React.memo(LoginScreen);
