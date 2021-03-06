/**
 * @format
 */


// ONLY THE ROOT COMPONENT USES APPREGISTRY


// import a library to hlep create a component

// React - has the functionality of a component within its library
import React from 'react';
// ReactNative - deals with taking a components output and making it display on screen
// provides default core components


// import destructuring: - Text 
import { Text, AppRegistry, YellowBox, View } from 'react-native';

// for custom components the path of the component must be specified
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

YellowBox.ignoreWarnings(['Remote debugger']);

// COMPONENT:
// components are objects that can be placed on screen on the device
// component - function that returns JSX
const App = () => {
    // below utilises JSX
    // uses tags
    // nesting tags is possible
    // JSX is used to display things to the device
    return ( // only one component is to be returned - one component cannot be returned after the other. Thus the tags have to be wrapped
        // component nested - using JSX for the imported statement
        <View>
            <Header headerText='Album Homepage' />
            <AlbumList />
        </View>
    );
};


// render it to the device
AppRegistry.registerComponent('albums', () => App);
