// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
// when creating a const: const name = () => ... 
// it is storing a function inside of a variable
const Header = (props) => {
// styles are referenced through destructuring
    // note these are props that are used in the components referenced to
    const { textStyle, viewStyle, layoutStyle } = styles;

    // const styling = styles;
    // styling.textStyle;
    // styling.viewStyle;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        // justify content positions vertically
        justifyContent: 'center',
        // align items positions horizontally
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 10 },
        // shadowOpacity: 0.5,
        elevation: 7,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
};

// make the component available to other parts of the app

// this is done not through AppRegistry which is concerned to adding to the app
// since this is a child component

// however it is achieved through use of the export keyword to export the componet:

export default Header;
