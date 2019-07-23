// import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

// make a component
// when creating a const: const name = () => ... 
// it is storing a function inside of a variable
const Header = () => {
    return (
        <Text>Album Homepage</Text>
    );
};

// make the component available to other parts of the app

// this is done not through AppRegistry which is concerned to adding to the app
// since this is a child component

// however it is achieved through use of the export keyword to export the componet:

export default Header;
