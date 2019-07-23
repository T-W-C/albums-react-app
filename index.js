/**
 * @format
 */

/** OLD CODE
    import {AppRegistry} from 'react-native';
    import App from './App';
    import {name as appName} from './app.json';

    AppRegistry.registerComponent(appName, () => App);
*/


// import a library to hlep create a component

// React - has the functionality of a component within its library
import React from 'react';
// ReactNative - deals with taking a components output and making it display on screen
// provides default core components


// import ReactNative from 'react-native';

// import destructuring: - Text 
import { Text, AppRegistry } from 'react-native';


// COMPONENT:
// components are objects that can be placed on screen on the device
// component - function that returns JSX
const App = () => {
    // below utilises JSX
    // uses tags
    // nesting tags is possible
    // JSX is used to display things to the device
    return (
        // Text is a react component that is need of being imported
        <Text>Some Text</Text>
    );
};


// render it to the device
AppRegistry.registerComponent('albums', () => App);
