import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Header from './src/components/Header';
import List from './src/components/List';

const App = () =>
(
    <View style={{flex: 1}}>
        <Header headerText = {'Tay Tay Albums'}/>
        <List/>
    </View>
);

AppRegistry.registerComponent('newProject', () => App);
