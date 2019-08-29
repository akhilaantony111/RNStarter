
import { Alert, AsyncStorage } from 'react-native';
import NavigationService from '../navigators/NavigationService';

export function logout() {
    AsyncStorage.removeItem('isLoggedIn'); //Removing logged in key from storage
    NavigationService.navigate('Login'); //Navigating to Login page
}

//Alert
export function alertPop(message) {
    Alert.alert(
        'Warning',
        message,
        [
            {
                text: 'OK',
                onPress: () => {
                }
            },
        ],
    )
}
