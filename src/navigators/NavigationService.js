
import { NavigationActions } from 'react-navigation';

let _navigator;
//Setting top level navigation
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}
//Navigates to specific routeName 
function navigate(routeName) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
        })
    );
}

export default {
    navigate,
    setTopLevelNavigator,
};