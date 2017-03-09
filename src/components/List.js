import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import ListItemDetails from './ListItemDetails'

class List extends Component
{
    state = {listItems: []};

    componentWillMount()
    {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({listItems: response.data}));
    }

    renderListItems()
    {
        return this.state.listItems.map(listItem =>
            <ListItemDetails key = {listItem.title} listItem = {listItem}/>
        );
    }

    render()
    {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderListItems()}
            </ScrollView>
        );
    }
}

export default List;