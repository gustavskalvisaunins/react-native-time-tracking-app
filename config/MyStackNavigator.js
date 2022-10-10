// STACK NAVIGATOR.

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from "react-native";
// import {createStackNavigator} from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import MyTabNavigator from "./MyTabNavigator";
import DateDisplay from "../components/DateDisplay";
import DateHeader from "../components/DateHeader";
import ProjectDetails from "../screens/ProjectDetails";
import EditorScreen from "../screens/EditorScreen";
import ProjectList from "../screens/ProjectList";
import TaskList from "../screens/TaskList";
import LoginScreen from "../screens/LoginScreen";

export default NavigationContainer({
        Login: {
            screen: LoginScreen,
            navigationOptions: ({
                header: null,
            }),
        },
        Tabs: {
            screen: MyTabNavigator,
            navigationOptions: ({
                headerLeft: <View/>,
                headerRight: <View/>,
                headerBackTitle: 'Back',
                headerTitle: <DateDisplay/>,
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center'
                },
                headerTransparent: true,
                headerStyle: {
                    borderBottomColor: '#fff',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                },
            }),
        },
        ProjectDetails: {
            screen: ProjectDetails,
            navigationOptions: ({
                headerRight: <View/>,
                headerTintColor: '#fff',
                headerBackTitle: 'Back',
                headerTitle: <DateHeader/>,
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                },
                headerTransparent: true,
                headerStyle: {
                    borderBottomColor: '#fff',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                },
            }),
        },
        EditorScreen: {
            screen: EditorScreen,
            navigationOptions: ({
                headerTintColor: '#fff',
                headerBackTitle: 'Back',
                headerRight: (
                    <TouchableOpacity
                        onPress={() => {
                            // On press save data.
                            return null;
                        }}
                    >
                        <Text
                            style={{color: '#fff', fontSize: 17, marginRight: 20,}}
                        >Save</Text>
                    </TouchableOpacity>
                ),
                headerTitle: 'Edit/Delete',
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    color: '#15CDCD',
                    fontSize: 18,
                    fontWeight: '500',
                },
                headerTransparent: true,
                headerStyle: {
                    borderBottomColor: '#fff',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                },
            }),
        },

        ProjectList: {
            screen: ProjectList,
            navigationOptions: ({
                headerRight: <View/>,
                headerTintColor: '#fff',
                headerTitle: 'Edit/Delete',
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    color: '#15CDCD',
                    fontSize: 18,
                    fontWeight: '500',
                },
                headerTransparent: true,
                headerStyle: {
                    borderBottomColor: '#fff',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                },
            }),
        },
        TaskList: {
            screen: TaskList,
            navigationOptions: ({
                headerRight: <View/>,
                headerTintColor: '#fff',
                headerTitle: 'Edit/Delete',
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    color: '#15CDCD',
                    fontSize: 18,
                    fontWeight: '500',
                },
                headerTransparent: true,
                headerStyle: {
                    borderBottomColor: '#fff',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                },
            }),
        },
    },
    {lazy: false}
);