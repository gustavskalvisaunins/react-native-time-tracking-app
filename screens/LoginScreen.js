// LOGIN SCREEN.

import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    ImageBackground,
} from 'react-native';
import {LinearGradient} from 'expo';
import {connect} from 'react-redux';
//import base64 from 'base64-js';


//const ACCEPT_HEADER = 'application/json, text/plain, */*';
//const CONTENT_TYPE_HEADER = 'application/x-www-form-urlencoded';
//const USER_AGENT = `YouTrackMobile(Nexus 5X Android 8.0)`; //fake junk
/*
function makeBtoa(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; i++) {
        byteArray.push(str.charCodeAt(i));
    }
    return base64.fromByteArray(byteArray);
}
*/

function mapStateToProps(state){
    return {
        username: state.username,
        password: state.password,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        usernameEntered: (input) => dispatch({type: 'USERNAME_ENTERED', payload: {input}}),
        passwordEntered: (input) => dispatch({type: 'PASSWORD_ENTERED', payload: {input}}),
    }
}

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        //this.makeAuthRequest = this.makeAuthRequest.bind(this);
        //this.obtainToken = this.obtainToken.bind(this);
        //this.obtainTokenByCredentials = this.obtainTokenByCredentials.bind(this);
        this.clientAuthCheck = this.clientAuthCheck.bind(this);

        //this.state = {
            //username: null,
            //password: null,
            //username: 'GAunins',
            //password: 'test12345#',
            //serviceId: null,
            //serviceSecret: null,
            //authorized: false,
        //};
    }
/*
    makeAuthRequest() {
        return this.obtainTokenByCredentials();
    }

    obtainTokenByCredentials() {
        return this.obtainToken([
            'grant_type=password',
            '&access_type=offline',
            `&username=${encodeURIComponent(this.state.username)}`,
            `&password=${encodeURIComponent(this.state.password)}`,
            `&scope=${encodeURIComponent('Hub YouTrack')}`,
        ].join(''));
    }

    obtainToken(body) {
        return fetch('http://youtrack.assecor.de:8080/hub/api/rest/oauth2/token', {
            method: 'POST',
            headers: {
                'Accept': ACCEPT_HEADER,
                //'User-Agent': USER_AGENT,
                'Authorization': 'Basic Y2xpZW50LWlkOmNsaWVudC1zZWNyZXQ=', //${makeBtoa(`${this.state.serviceId}:${this.state.serviceSecret}`)}`,
                'Content-Type': CONTENT_TYPE_HEADER,
            },
            body: body,
        })
        .then(async res => {
            console.log(`Got result from YouTrack: ${res && res.status}`);
            console.log(`Response body: ${res && res._bodyText}`);
            return res.json();
        })
        .then(res => {
            if (res.error) {
                throw res;
            }
            return res;
        });

    }
*/

    clientAuthCheck() {
        if(this.props.username === 'Gustavs.Aunins' && this.props.password === 'test12345'){
            //if (this.state.authorized === true) {
            this.props.navigation.navigate('Tabs');
            //}
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/assecor/login_bg.jpg')}
                resizeMode='cover'
                style={styles.bg_image}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 20, 0.7)', 'rgba(0, 65, 87, 0.6)']}
                    style={styles.bg_color}
                    start={[0, 0]}
                    end={[1, 1]}
                >
                    <Image
                        source={require('../assets/assecor/assecor_logo.png')}
                        style={styles.logo}
                    />

                    <KeyboardAvoidingView
                        behavior="padding"
                        style={styles.container}
                    >
                        <TextInput
                            style = {styles.input1}
                            placeholder='Name.Surname@email.com'
                            placeholderTextColor='#000014'
                            underlineColorAndroid='transparent'
                            keyboardType='email-address'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(input) => {
                                this.props.usernameEntered(input);
                            }}
                        />

                        <TextInput
                            style = {styles.input2}
                            placeholder='●●●●●●●●'
                            placeholderTextColor='#000014'
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            autoCapitalize='none'
                            secureTextEntry={true}
                            onChangeText={(input) => {
                                this.props.passwordEntered(input);
                            }}
                        />

                        <TouchableOpacity
                            style = {styles.buttonContainer1}
                            onPress={this.clientAuthCheck}
                        >
                            <Text style = {styles.buttonText1}>Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonContainer2}
                            onPress={this.clientAuthCheck}
                        >
                            <Image
                                source={require('../assets/assecor/touch_id_black.png')}
                                style={{width: 45, height: 45}}
                            />

                            <Text style = {styles.buttonText2}>
                                Log In with Touch ID
                            </Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                </LinearGradient>
            </ImageBackground>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    bg_image: {
        width: '100%',
        height: '100%',
    },

    bg_color: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
    },

    logo: {
        resizeMode: 'contain',
        width: 220,
        height: 60,
        flex: 6,
        bottom: 80,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: 0.6,
        flex: 3,
        bottom: 30,
    },

    input1:{
        width: 220,
        height: 35,
        backgroundColor: '#fff',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 7,
        borderWidth: 0,
    },

    input2:{
        width: 220,
        height: 35,
        backgroundColor: '#fff',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 7,
        borderWidth: 0,
    },

    buttonContainer1: {
        backgroundColor: '#A0D4F1',
        width: 100,
        height: 40,
        borderRadius: 7,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer2: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    buttonText1: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    buttonText2: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft: 10,
    },
});