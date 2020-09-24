import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import List from '../screens/List'
import Login from '../screens/Login'
import { UserProvider } from '../context/User'
import Initial from '../screens/Initial'
const {Navigator, Screen} = createStackNavigator();

export default function Main(){
    return(
        <UserProvider>
            <NavigationContainer>
                <Navigator headerMode="none" initialRouteName="Initial">
                    <Screen name="Initial" component={Initial} />
                    <Screen name="List" component={List} />
                    <Screen name="Login" component={Login} />
                </Navigator>
            </NavigationContainer>
        </UserProvider>
    )
}