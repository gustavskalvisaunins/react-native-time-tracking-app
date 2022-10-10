// TASK LIST SCREEN, displays all available tasks to pick from.

import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, Platform, View,} from 'react-native';
import {LinearGradient} from "expo";
// import {ListItem} from "react-native-elements";
import { ListItem } from "@rneui/themed";
import {projects} from '../config/data';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return {
        selectedTask: state.selectedTask,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        taskSelected: (task) => dispatch({type: 'TASK_SELECTED', payload: {task}}),
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.renderSeparator = this.renderSeparator.bind(this);
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: StyleSheet.hairlineWidth,
                    width: '100%',
                    backgroundColor: '#fff',
                }}
            />
        );
    };

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
                <FlatList
                    data={state.params.tasks}
                    style={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: Platform.OS === 'ios' ? 65 : 80,}}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            onPress={() => {
                                let taskName = item.task_id;
                                this.props.taskSelected(taskName);
                                const PROJ_INFO = {...item, ...this.props.navigation.state.params};
                                this.props.navigation.navigate('TimerTab', PROJ_INFO);
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
            </LinearGradient>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

const styles = StyleSheet.create({
    bg_color: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        //borderBottomColor: '#fff',
        //borderBottomWidth: StyleSheet.hairlineWidth,
    },

    text1: {
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        paddingLeft: 70,
    },
});
