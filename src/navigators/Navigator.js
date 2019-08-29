
import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import Home from '../modules/home/Home';
import Login from '../modules/login/Login';
import InitialNavigation from './InitialNavigation';


const AppStack = createStackNavigator(
    {
        Home: {
            screen: Home
        }
    },
    {
        defaultNavigationOptions: {
            header: null //Setting header as empty or null
        }
    }
);

const AuthStack = createStackNavigator(
    {
        Login:{
            screen: Login
        }
    },
    {
        defaultNavigationOptions: {
            header: null //Setting header as empty or null
        }
    }
)

const AppNavigator = createSwitchNavigator(
    {
        InitialNavigation: InitialNavigation,
        Auth: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: 'InitialNavigation', //Initially navigates to InitialNavigation screen
        defaultNavigationOptions: {
            gesturesEnabled: false, 
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;