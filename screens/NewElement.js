import React from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo";
import DatePicker from "react-native-datepicker";
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";
import {connect} from 'react-redux';

//const editJsonFile = require("edit-json-file");
//let file = editJsonFile('../config/test.json');

function mapStateToProps(state){
    return {
        selectedProject: state.selectedProject,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearProject: () => dispatch({type: 'CLEAR_PROJECT'}),
    }
}

class NewElement extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            desc: null,
            collapsed: false,
        };
    }

    componentWillMount() {
        //file.set("planet", "Earth");
        //file.set("name.first", "Johnny");
        //file.set("name.last", "B.");
        //file.set("is_student", false);
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
                            this.props.navigation.navigate('ProjectList', {screen: 'NewElement'});
                        }}
                    >
                        <Text style={styles.text1}>
                            {this.props.selectedProject}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                </View>

                <View style={styles.container2}>
                    <Text style={styles.text1}>Date & Time</Text>
                    {/*
                    {state.params.task_date} {state.params.task_time}
                    */}

                    <DatePicker
                        style={{width: 300}}
                        date={this.state.date}
                        mode="datetime"
                        placeholder={this.state.date}
                        format="DD.MM.YY    HH:mm"
                        showIcon={false}
                        is24Hour={true}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                alignSelf: 'center',
                                borderWidth: 0,
                                borderColor: 'transparent',
                            },
                            placeholderText: {
                                fontWeight: '400',
                                fontSize: 16,
                                color: '#fff',
                            },
                            dateText: {
                                fontWeight: '400',
                                fontSize: 16,
                                color: '#fff',
                            },
                        }}
                        onDateChange={(date) => {
                            this.setState({date: date});
                            //this.props.dateSelected(date);
                        }}
                    />
                </View>

                <View style={{height: 150, borderBottomColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth,}}>
                    <TextInput
                        style={{
                            fontSize: 15, fontWeight: '100', paddingLeft: 60, height: 200, borderColor: 'transparent', borderWidth: 0, color: '#fff',
                            marginRight: 20
                        }}
                        placeholder='Description goes here...'
                        placeholderTextColor='#fff'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        multiline={true}
                        autoCapitalize='none'
                        value={this.state.desc}
                        defaultValue=''

                        onChangeText={(input) => {
                            this.setState({desc: input})
                            //+izmainīt datus data.js failā vai ar API īstos
                        }}
                    />
                </View>

                <Collapse>
                    <CollapseHeader>
                        <View style={styles.container}>
                            <Text style={{paddingLeft: 60, color: '#f08500', fontSize: 20, fontWeight: '700'}}>ADD ENTRY</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View
                            style={{justifyContent: 'center', alignItems: 'center',}}
                        >
                            <TouchableOpacity
                                style={{
                                    marginTop: 10,
                                    backgroundColor: '#A0D4F1',
                                    width: 350,
                                    height: 60,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    if(this.props.selectedProject2 !== 'Select Project...' && this.state.desc !== null){
                                        this.setState({desc: null});
                                        this.props.clearProject();
                                        //ADD TASK TO PROJECT DATA
                                    } else {
                                        alert('Cannot add task without selecting project and adding a description.');
                                    }
                                }}
                            >
                                <Text
                                    style={{fontSize: 17,}}
                                >
                                    Add
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    marginTop: 5,
                                    marginBottom: 10,
                                    backgroundColor: '#15CDCD',
                                    width: 350,
                                    height: 60,
                                    borderRadius: 10,
                                    borderWidth: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => this.setState({collapsed: true})}
                            >
                                <Text
                                    style={{fontSize: 17, fontWeight: '500',}}
                                >
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </CollapseBody>
                </Collapse>
            </LinearGradient>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewElement);

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
