// PROJECT DETAILS SCREEN, detailed information on a project.

import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform,} from 'react-native';
import {LinearGradient} from "expo";
import CircularSlider from 'react-native-circular-slider';
import Icon from 'react-native-vector-icons/Ionicons';
// import {ListItem} from "react-native-elements";
import { ListItem } from "@rneui/themed";

class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.renderSeparator = this.renderSeparator.bind(this);

        this.state = {
            proj: null,
            startAngle: 0,
            angleLength: 0,
            readMore: false,
        };
    }

    onUpdate = () => {
        return null;
    }

    componentWillMount() {
        // Props from the previous screen.
        const {params} = this.props.navigation.state;

        //Time to percent to degrees
        let percent = 0;
        let degrees = 0;

        percent = (params.tracked_time / (params.planned_time + params.tracked_time)) * 100;
        degrees = ((percent * 360) / 100) * Math.PI / 180;


        this.setState({
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
        // Props from the previous screen.
        const {state} = this.props.navigation;

        return(
            <LinearGradient
                colors={['rgba(0, 0, 20, 0.95)', 'rgba(0, 65, 87, 0.8)']}
                style={styles.bg_color}
                start={[0, 0]}
                end={[1, 1]}
            >
                <ScrollView
                    style={{
                        marginTop: Platform.OS === 'ios' ? 65 : 80,
                    }}
                >
                    <View style={styles.circular_slider}>
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
                            <Text style={styles.circle_text1}>{state.params.tracked_time}</Text>
                            <Text style={styles.circle_text2}>HRS</Text>
                        </View>

                        <View style={styles.container}>

                            <Text style={styles.proj_name}>
                                {state.params.number}{'\n'}
                                {state.params.name}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <Icon
                            color='#fff'
                            name='ios-time'
                            size={28}
                            style={{position: 'absolute', left: 20}}
                        />
                        <Text style={{paddingLeft: 60, color: '#fff', fontWeight: 'bold', fontSize: 15,}}>
                            Planned time  {state.params.planned_time}
                        </Text>
                    </View>
                    <View
                        style={{
                            height: StyleSheet.hairlineWidth,
                            width: '90%',
                            backgroundColor: '#fff',
                            marginLeft: 60,
                        }}
                    />

                    <View
                        style={{marginLeft: 60, marginRight: 20, flex: 0, flexShrink: 1, flexDirection: 'row',
                            justifyContent: 'flex-start', alignItems: 'center', height: this.state.readMore === true ? 200 : 50,}}
                    >
                        {
                        // Read more on text press
                        this.state.readMore === true ?
                            <ScrollView
                                style={{flex: 1}}
                            >
                                <Text
                                    style={{color: '#fff', fontWeight: '100', fontSize: 15,}}
                                    onPress={() => {
                                        if (this.state.readMore === false) {
                                            this.setState({readMore: true})
                                        } else if (this.state.readMore === true) {
                                            this.setState({readMore: false})
                                        }
                                    }}
                                >
                                    {state.params.description}
                                </Text>
                            </ScrollView>
                        :
                            <Text
                                numberOfLines={1}
                                style={{color: '#fff', fontWeight: '100', fontSize: 15,}}
                                onPress={() => {
                                    // Replace if with function isTextTruncated
                                    if (state.params.description.length > 34) {
                                        if (this.state.readMore === false) {
                                            this.setState({readMore: true})
                                        } else if (this.state.readMore === true) {
                                            this.setState({readMore: false})
                                        }
                                    } else {
                                        return null
                                    }
                                }}
                            >
                                {state.params.description}
                            </Text>
                        }
                    </View>

                    <View style={styles.container3}>
                        <Icon
                            color='#fff'
                            name='ios-timer'
                            size={28}
                            style={{position: 'absolute', left: 20}}
                        />
                        <Text style={{paddingLeft: 60, color: '#fff', fontWeight: 'bold', fontSize: 15}}>
                            Tracked time  {state.params.tracked_time}
                        </Text>
                    </View>
                    <View
                        style={{
                            height: StyleSheet.hairlineWidth,
                            width: '90%',
                            backgroundColor: '#fff',
                            marginLeft: 60,
                        }}
                    />

                    <FlatList
                        data={state.params.tasks}
                        style={{borderTopWidth: 0, borderBottomWidth: 0, marginBottom: 0}} //marginBottom: 50, ja ir TabBar
                        renderItem={({item}) =>
                            <TouchableOpacity
                                onPress={() => {
                                    const PROJ_INFO = {...item, ...this.props.navigation.state.params};
                                    this.props.navigation.navigate('EditorScreen', PROJ_INFO);
                                }}
                            >
                                <ListItem
                                    titleStyle={{left: -10, color: '#fff', fontSize: 15, fontWeight: '100'}}
                                    title={`${item.task_date}  ${item.task_desc}`}
                                    //rightTitleStyle={{color: '#fff', fontSize: 15, fontWeight: '100'}}
                                    //rightTitle={item.task_desc}
                                    containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}
                                />
                            </TouchableOpacity>
                        }
                        keyExtractor={(item) => item.task_id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </ScrollView>
            </LinearGradient>
        );
    }
}

export default ProjectDetails;

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

    container2: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    container3: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#fff',
    },

    circular_slider: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        flex: 1,
    },

    proj_name: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
