import React from 'react';
import { StackNavigator, TabNavigator, createSwitchNavigator } from 'react-navigation';

import MapScreen from '../screens/mapscreen';
import SplashScreen from '../screens/splashscreen';
import AboutScreen from '../screens/aboutscreen';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';
import ProfileScreen from '../screens/profilescreen';
import LeaderboardScreen from '../screens/leaderboardscreen';
import SettingsScreen from '../screens/settingsscreen';



export const SignedIn = StackNavigator(
    {
        Map: {
            screen: MapScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
        Leaderboard: {
            screen: LeaderboardScreen,
        },
        Settings: {
            screen: SettingsScreen
        }
    },
    {
        initialRouteName: 'Map',
    }
);


export const SignedOut = StackNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
        About: {
            screen: AboutScreen
        },
        SignIn: {
            screen: SignInScreen
        },
        SignUp: {
            screen: SignUpScreen
        }

    },
    {
        initialRouteName: 'Splash',
    }

)

export const createRootNavigator = (signedIn) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    )
}


