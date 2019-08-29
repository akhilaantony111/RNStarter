# RNStarter
A React Native starter kit of version 0.60.5 with navigation, splash scren, redux, api integration, network info, async storage of latest versions. 

The App consists of a Login and Home Page. In Login page a ppublic API is called and then it navigates to the home page if the response is success. Used common methods for API calls and also included redux in it. 

Setting a parameter in Async Storage for checking whether the user is logged in or not. According to that navigation is handled.

Used Net Info from @react-native-community/netinfo since NetInfo is deprecated in the latest version. An Offline screen will appear if there is no Internet. It is done in only Login page since Home page doesnot require any network connection.

# Credentials for login
Email : eve.holt@reqres.in 
Password: cityslicka

## Screens
### Login
![Login](src/assets/screens/login.png?raw=true "Login")
