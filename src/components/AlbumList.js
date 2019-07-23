import React, { Component } from 'react'
import { View, Text } from 'react-native'

// IF HELPER METHODS OR DATA FETCHING THINK CLASS COMPONENTS
// when creating a class for class based components for dynamic based information fetching
// the class extends Componennt which is part of the React library
// it must have one method, which is the render method
// the render method is equivalent to the return statement seen in a functional component
// it must return a block of JSX which determines the functionality. 
class AlbumList extends Component {
    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

export default AlbumList;
