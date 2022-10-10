// TAB NAVIGATOR.

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewElement from '../screens/NewElement';
import TrackedTime from '../screens/TrackedTime';
import Forecast from '../screens/Forecast';
import HomeScreen from '../screens/HomeScreen';
import Timer from '../screens/Timer';
import {StyleSheet} from "react-native";

export default createBottomTabNavigator ({
    DashboardTab: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({tintColor}) =>
                <Icon
                    color={tintColor}
                    name='ios-globe'
                    size={28}
                />,
        },
    },

    NewElementTab: {
        screen: NewElement,
        navigationOptions: {
            tabBarLabel: 'New element',
            tabBarIcon: ({tintColor}) =>
                <Icon
                    color={tintColor}
                    name='ios-alarm'
                    size={28}
                />,
        },
    },
/*
    TrackedTimeTab: {
        screen: TrackedTime,
        navigationOptions: {
            tabBarLabel: 'Tracked time',
            tabBarIcon: ({tintColor}) =>
                <Icon
                    color={tintColor}
                    name='ios-timer'
                    size={28}
                />,
        },
    },

    ForecastTab: {
        screen: Forecast,
        navigationOptions: {
            tabBarLabel: 'Forecast',
            tabBarIcon: ({tintColor}) =>
                <Icon
                    color={tintColor}
                    name='ios-timer'
                    size={28}
                />,
        },
    },
*/
    TimerTab: {
        screen: Timer,
        navigationOptions: {
            tabBarLabel: 'Timer',
            tabBarIcon: ({tintColor}) =>
                <Icon
                    color={tintColor}
                    name='ios-timer'
                    size={28}
                />,
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: '#15CDCD',
        inactiveTintColor: '#fff',
        style: {
            paddingTop: 8,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: '#fff',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
        }
    }
});