import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";


class Forecast extends React.Component {
    render() {
        return(
            <LinearGradient
                colors={['rgba(0, 0, 20, 0.95)', 'rgba(0, 65, 87, 0.8)']}
                style={styles.bg_color}
                start={[0, 0]}
                end={[1, 1]}
            >
                <View style={styles.main_container}>
                    <Text style={styles.text1}>[Forecast]</Text>
                </View>
            </LinearGradient>
        );
    }
}

export default Forecast;

const styles = StyleSheet.create({
    bg_color: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
    },

    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text1: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
});
