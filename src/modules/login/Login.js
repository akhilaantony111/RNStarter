import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from '../../actions/index';
import styles from './Styles';
import { alertPop } from '../../utils/Methods';
import Offline from '../../components/Offline';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isConnected: null
        }
    }

    callLogin = () => {
        // Correct credentials - email : eve.holt@reqres.in , password: cityslicka
        var { email, password } = this.state;
        var regexEmail = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,4})$/; //Email regex
        let regexFullSpace = /^\s*$/; // Full space
        if (email != "" && password != "" && !regexFullSpace.test(email) && !regexFullSpace.test(password)) {  //Checking if email and password is empty
            if (regexEmail.test(email)) { //Checking if email satisifes the regular email syntax
                let params = {
                    email: this.state.email,
                    password: this.state.password
                }
                this.props.actions.login(params).then(() => { //Calling action
                    if (this.props.loginSuccess == true) { //Checking the loginSuccess value from mapStateToProps
                        this.props.navigation.navigate('Home');
                    }
                    else {
                        alertPop("Invalid login credentials.");
                    }
                })
            }
            else {
                alertPop("Enter a valid email");
            }
        }
        else {
            alertPop("Enter credentials.");
        }
    }
    static getDerivedStateFromProps(props, current_state) { //Whenever props change this method will invoke
        if (current_state.isConnected !== props.isConnected) { //Checking the parameter isconnected is same as in state and props
            return {
                isConnected: props.isConnected, //setting isconnected value, similiar as setstate
            }
        }
        return null //Should return null if nothing should change
    }
    render() {
        return (
            !this.state.isConnected ? //If no network displays Offline component 
                <Offline />
                :
                <View style={styles.container}>
                    <TextInput placeholder="Email" onChangeText={(email) => { this.setState({ email }) }} style={styles.textInput} />
                    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(password) => { this.setState({ password }) }} style={styles.textInput} />
                    <TouchableHighlight onPress={this.callLogin} style={styles.loginButton}>
                        <Text style={styles.loginText}>
                            Login
                    </Text>
                    </TouchableHighlight>
                </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loginSuccess: state.login.loginSuccess, //Fetching value from login reducer
        isConnected: state.network.isConnected //Fetching value from network reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreators, dispatch) //Binding actions together
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
