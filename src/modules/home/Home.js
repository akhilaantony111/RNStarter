import React, { Component } from 'react';
import { SafeAreaView, View, Text,TouchableHighlight } from 'react-native';
import styles from './Styles';
import { logout } from '../../utils/Methods';

class Home extends Component {
    callLogout = () => {
        logout(); //Calling the method in utils to clear the async storage
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.logoutView}>
                    <TouchableHighlight onPress={this.callLogout} style={styles.logoutButton}>
                        <Text style={styles.logoutText}>
                            Logout
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <Text>
                        Welcome to Home..
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
