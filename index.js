
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json'; //Taking app name from a json file

console.disableYellowBox = true; //Disabling the warning errors in debug mode

AppRegistry.registerComponent(appName, () => App); //Registering App Component
