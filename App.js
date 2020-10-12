import * as React from 'react';
import {View, Text, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SlideScreen from './Src/Container/Slide/SlideScreen';
import LoginScreen from './Src/Container/Login/LoginScreen';
import HomeScreen from './Src/Container/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Colors} from './Src/Theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={TabHome} options={{headerShown: false}}/>
                <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="slide" component={SlideScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

function MyTabBar({state, descriptors, navigation}) {
    // console.log(state, descriptors, navigation);
    return (
        <SafeAreaView style={{backgroundColor: Colors.white, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
            <View style={{
                flexDirection: 'row',
                height: 50,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
                marginHorizontal: 78,
                paddingHorizontal: 12,
                // backgroundColor : "red"
            }}>
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
                    const views = () => {
                        if (isFocused) {
                            return <View style={{
                                flexDirection: 'row',
                                backgroundColor: Colors.softGreen,
                                borderRadius: 12,
                                padding: 6,
                                alignItems: 'center',
                            }}>
                                <Ionicons name={'home'} size={23} color={Colors.white}/>
                                <Text style={{color: isFocused ? '#efeff1' : '#222', marginLeft: 5}}>
                                    {label}
                                </Text>
                            </View>;
                        } else {
                            return <Ionicons name={'home'} size={23}/>;
                        }
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
                            style={{justifyItems: 'center', flexDirection : ""}}
                        >
                            {views()}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

function TabHome() {
    return <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
    >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen}/>
        <Tab.Screen name="detail" component={DetailsScreen}/>
        <Tab.Screen name="user" component={UserScreen}/>
    </Tab.Navigator>;
}

//Ex

function DetailsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Details!</Text>
        </View>
    );
}

function UserScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>User!</Text>
        </View>
    );
}


function SettingsScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
            <SettingsStack.Screen name="Details" component={DetailsScreen}/>
        </SettingsStack.Navigator>
    );
}

