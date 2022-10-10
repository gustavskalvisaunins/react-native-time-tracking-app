// HOME SCREEN, all projects are displayed here.

import React from 'react';
import {StyleSheet, Platform, Text, FlatList, View, TouchableOpacity} from 'react-native';
// import { ListItem } from 'react-native-elements';
import { ListItem } from "@rneui/themed";
import {LinearGradient} from 'expo';
import {projects} from '../config/data';
import CircularSlider from 'react-native-circular-slider';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.renderSeparator = this.renderSeparator.bind(this);

        this.state = {
            startAngle: 0,
            angleLength: 0,
            totalTrackedTime: 0,
            totalPlannedTime: 0,
            proj: null,
        };
    }

    onUpdate = () => {
        return null;
    }

    componentWillMount() {
        //Total time
        let tempTrackedTime = 0;
        let tempPlannedTime = 0;

        for (let i = 0; i < projects.length; i++){
            tempTrackedTime += projects[i].tracked_time;
            tempPlannedTime += projects[i].planned_time;
        }

        //Time to percent to degrees
        let percent = 0;
        let degrees = 0;

        percent = (tempTrackedTime / (tempPlannedTime + tempTrackedTime)) * 100;
        degrees = ((percent * 360) / 100) * Math.PI / 180;


        this.setState({
            totalTrackedTime: tempTrackedTime,
            totalPlannedTime: tempPlannedTime,
            angleLength: degrees,
        });
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: StyleSheet.hairlineWidth,
                    width: '100%',
                    backgroundColor: '#fff',
                    marginLeft: 60,
                }}
            />
        );
    }

    render() {
        return (
            <LinearGradient
                colors={['rgba(0, 0, 20, 0.95)', 'rgba(0, 65, 87, 0.9)']}
                style={styles.bg_color}
                start={[0, 0]}
                end={[1, 1]}
            >

                <View style={styles.overview}>
                    <CircularSlider
                        startAngle={this.state.startAngle}
                        angleLength={this.state.angleLength}
                        onUpdate={this.onUpdate}
                        segments={5}
                        strokeWidth={17}
                        radius={60}
                        gradientColorFrom="#15CDCD"
                        gradientColorTo="#15CDCD"
                        showClockFace
                        clockFaceColor="#9d9d9d"
                        bgCircleColor="#A0D4F1"
                    />

                    <View style={{position: 'absolute', alignSelf: 'center'}}>
                        <Text style={styles.circle_text1}>{this.state.totalTrackedTime}</Text>
                        <Text style={styles.circle_text2}>HRS</Text>
                    </View>

                    <View style={styles.container}>
                            <Text style={styles.header}>
                                Overview
                            </Text>

                        <View style={styles.container2}>
                            <Icon
                                color='#fff'
                                name='ios-timer'
                                size={28}
                            />
                            <Text style={styles.text1}>Tracked time  {this.state.totalTrackedTime}</Text>
                        </View>
                        <View style={styles.container3}>
                            <Icon
                                color='#fff'
                                name='ios-time'
                                size={28}
                            />
                            <Text style={styles.text1}>Planned time  {this.state.totalPlannedTime}</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={projects} //.sort((a, b) => a.localeCompare(b))
                    style={{marginBottom: 50}}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ProjectDetails', item)}
                        >
                            <ListItem
                                titleStyle={{left: -10, color: '#fff', fontSize: 15, fontWeight: '100'}}
                                title={`${item.number}  ${item.name}`}
                                //rightTitleStyle={{color: '#fff', fontSize: 15, fontWeight: '100'}}
                                //rightTitle={item.name}
                                containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}
                                contentContainerStyle={{alignItems: 'flex-start',}}
                            />
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </LinearGradient>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    bg_color: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
    },

    date_picker: {
        marginTop: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    project_list: {
        color: '#fff',
    },

    overview: {
        // Needs a better sizing solution
        marginTop: Platform.OS === 'ios' ? 65 : 80,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#fff',
    },

    circle_text1: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        right: 123,
    },

    circle_text2: {
        color: '#b2b2b1',
        right: 106,
        fontSize: 12,
    },

    container: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
    },

    container2: {
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text1: {
        color: '#fff',
        fontSize: 15,
        paddingLeft: 10,
    },
});