import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return {
        date: state.date,
    }
}

class DateHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container1}>
                <Text style={styles.text1}>{this.props.date}</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps)(DateHeader);

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text1: {
        color: '#15CDCD',
        fontSize: 18,
        fontWeight: '500',
    },
});
