import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';

// IF HELPER METHODS OR DATA FETCHING THINK CLASS COMPONENTS
// when creating a class for class based components for dynamic based information fetching
// the class extends Componennt which is part of the React library
// it must have one method, which is the render method
// the render method is equivalent to the return statement seen in a functional component
// it must return a block of JSX which determines the functionality. 
class AlbumList extends Component {
    // state is always modified through this.setState(...) for any future update
    state = { albums: [] };


// below method is prebuilt and recognised by react
// AlbumList needs to rerender after data has loaded from HTTP request
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }


    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

export default AlbumList;
