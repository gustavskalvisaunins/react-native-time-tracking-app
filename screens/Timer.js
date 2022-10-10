import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo";
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return {
        selectedProject2: state.selectedProject2,
        selectedTask: state.selectedTask,
        timerStopped: state.timerStopped,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearProjectTask: () => dispatch({type: 'CLEAR_PROJECT_TASK'}),
    }
}
/*
function counterStarted(){
    this.setState({seconds: this.state.seconds + 1});
    if(this.state.seconds === 60){
        this.setState({seconds: 0});
        this.setState({minutes: this.state.minutes + 1});
    }
    if(this.state.minutes === 60){
        this.setState({minutes: 0});
        this.setState({hours: this.state.hours + 1});
    }
}
*/
class TimerScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            desc: null,
            playOrPause: 'ios-play',
            seconds: 0,
            minutes: 0,
            hours: 0,
            secondsZero: 0,
            minutesZero: 0,
            hoursZero: 0,
        };

        this.counterStarted = this.counterStarted.bind(this);
        this.handleOnPress = this.handleOnPress.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    counterStarted(){
        if(this.state.seconds < 9){
            this.setState({secondsZero: 0});
        } else {
            this.setState({secondsZero: null});
        }

        if(this.state.minutes < 9){
            this.setState({minutesZero: 0});
        } else {
            this.setState({minutesZero: null});
        }

        if(this.state.hours < 9){
            this.setState({hoursZero: 0});
        } else {
            this.setState({hoursZero: null});
        }

        this.setState({seconds: this.state.seconds + 1});
        if(this.state.seconds === 60){
            this.setState({seconds: 0});
            this.setState({minutes: this.state.minutes + 1});
        }

        if(this.state.minutes === 60){
            this.setState({minutes: 0});
            this.setState({hours: this.state.hours + 1});
        }
    }

    handleOnPress(){
        if(this.props.selectedProject2 !== 'Select Project...' && this.props.selectedTask !== 'Select Task...'){
            if (this.state.playOrPause === 'ios-play') {
                this.setState({playOrPause: 'ios-pause'});
                this.interval = setInterval(this.counterStarted, 1000);
            }
            if (this.state.playOrPause === 'ios-pause') {
                this.setState({playOrPause: 'ios-play'});
                clearInterval(this.interval);
            }
        } else {
            alert('Cannot start timer without selecting project/task.')
        }
    }

    resetStopwatch(){
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0,
            secondsZero: 0,
            minutesZero: 0,
            hoursZero: 0,
        });
    }

    render() {
        return(
            <LinearGradient
                colors={['rgba(0, 0, 20, 0.95)', 'rgba(0, 65, 87, 0.8)']}
                style={styles.bg_color}
                start={[0, 0]}
                end={[1, 1]}
            >
                <View
                    style={{
                        marginTop: Platform.OS === 'ios' ? 65 : 80,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        height: 50,
                        borderBottomColor: '#fff',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                >

                </View>

                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({playOrPause: 'ios-play'});
                            this.props.navigation.navigate('ProjectList', {screen: 'Timer'});
                        }}
                    >
                        <Text style={styles.text1}>
                            {this.props.selectedProject2}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                </View>

                <View style={styles.container2}>
                    <TouchableOpacity
                        onPress={() => {
                            if(this.props.selectedProject2 !== 'Select Project...') {
                                this.setState({playOrPause: 'ios-play'});
                                const PROJ_INFO = this.props.navigation.state.params;
                                this.props.navigation.navigate('TaskList', PROJ_INFO);
                            } else {
                                alert('Cannot choose a task without choosing project.');
                            }
                        }}
                    >
                        <Text style={styles.text1}>
                            {this.props.selectedTask}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{height: 150, borderBottomColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth, justifyContent: 'center',}}>
                    <Text
                        style={{fontSize: 80, color: '#fff', paddingLeft: 60,}}
                    >
                        {this.state.hoursZero}{this.state.hours}:{this.state.minutesZero}{this.state.minutes}:{this.state.secondsZero}{this.state.seconds}
                    </Text>
                </View>

                <View style={styles.container}>
                    <Text style={{paddingLeft: 60, color: '#f08500', fontSize: 20, fontWeight: '700'}}>START TIMER</Text>
                </View>

                <View
                    style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}
                >
                    <TouchableOpacity
                        style={{
                            borderColor: '#fff',
                            marginTop: 20,
                            marginRight: 10,
                            backgroundColor: 'transparent',
                            width: 110,
                            height: 110,
                            borderRadius: 55,
                            borderWidth: StyleSheet.hairlineWidth,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            this.handleOnPress();
                        }}
                    >
                        <Icon
                            color='#fff'
                            name={this.state.playOrPause}
                            size={28}
                            style={{color: '#fff'}}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderColor: '#fff',
                            marginTop: 20,
                            marginLeft: 10,
                            backgroundColor: 'transparent',
                            width: 110,
                            height: 110,
                            borderRadius: 55,
                            borderWidth: StyleSheet.hairlineWidth,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            this.setState({playOrPause: 'ios-play'});
                            clearInterval(this.interval);
                            this.props.clearProjectTask();
                            this.resetStopwatch();
                        }}
                    >
                        <Text
                            style={{fontSize: 17, fontWeight: '500', color: '#fff'}}
                        >
                            STOP
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerScreen);

const styles = StyleSheet.create({
    bg_color: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
    },

    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 50,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    text1: {
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        paddingLeft: 60,
    },
});
