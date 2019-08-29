import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './src/navigators/Navigator';
import store from './src/store/Store';
import NavigationService from './src/navigators/NavigationService';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
 
  componentDidMount() {
    SplashScreen.hide(); //Native Splash screen is implemented. To hide when the app gets loaded.
  }
  
  render() {
    return (
      //Wrapping store to all containers with Provider.
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef); //setting top level navigation to App container
          }}
        />
      </Provider>
    );
  }
}

