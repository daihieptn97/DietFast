import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SlideScreen from './Src/Container/Slide/SlideScreen';
import LoginScreen from './Src/Container/Login/LoginScreen';
import HomeScreen from './Src/Container/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

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

function TabHome() {
    return <Tab.Navigator

        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'alert-outline'
                        : 'alert-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'alert-outline' : 'alert-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color}/>;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
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

