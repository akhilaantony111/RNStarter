import { Component } from 'react';
import { AsyncStorage } from 'react-native';

export default class InitialNavigation extends Component {
    constructor(props) {
        super(props);
        this.fetchStorageData();
    }
    fetchStorageData = async () => {
        //Fetching value from async storage to check whether the user is logged in or not
        //Async and await is used to get the exact value since AsyncStorage is Promise
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate(
            isLoggedIn ? 'Home' : 'Login' //Navigates to Login if not logged in else to Home
        );
    }
    render() {
        return null; //Returning empty render
    }
}
