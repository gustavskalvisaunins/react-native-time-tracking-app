// PROJECT LIST SCREEN, displays all available projects to pick from.

import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, Platform, View,} from 'react-native';
import {LinearGradient} from "expo";
// import {ListItem} from "react-native-elements";
import { ListItem } from "@rneui/themed";
import {projects} from '../config/data';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return {
        selectedProject: state.selectedProject,
        selectedProject2: state.selectedProject2,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        projectSelected: (project) => dispatch({type: 'PROJECT_SELECTED', payload: {project}}),
        projectSelected2: (project) => dispatch({type: 'PROJECT_SELECTED2', payload: {project}}),
    }
}

class ProjectList extends React.Component {
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
        const {state} = this.props.navigation;

        return(
            <LinearGradient
                colors={['rgba(0, 0, 20, 0.95)', 'rgba(0, 65, 87, 0.8)']}
                style={styles.bg_color}
                start={[0, 0]}
                end={[1, 1]}
            >
                <FlatList
                    data={projects}
                    style={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: Platform.OS === 'ios' ? 65 : 80,}}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => {
                                let projectName = item.number + '_' + item.name;

                                if(state.params.screen === 'EditorScreen') {
                                    this.props.navigation.navigate('EditorScreen', item);
                                }
                                if(state.params.screen === 'NewElement'){
                                    this.props.projectSelected(projectName);
                                    this.props.navigation.navigate('NewElementTab', item);
                                }
                                if(state.params.screen === 'Timer'){
                                    this.props.projectSelected2(projectName);
                                    this.props.navigation.navigate('TimerTab', item);
                                }
                            }}
                        >
                            <ListItem
                                titleStyle={{left: -10, color: '#fff', fontSize: 15, fontWeight: '100'}}
                                title={`${item.number}_${item.name}`}
                                containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}
                            />
                        </TouchableOpacity>)
                    }
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </LinearGradient>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

const styles = StyleSheet.create({
    bg_color: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
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
