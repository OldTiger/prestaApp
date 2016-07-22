import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    StatusBar,
} from 'react-native';
import * as API from '../../api';
import {Sliders} from  '../../components/share/slider';
import CategoriesBar from './categories-bar';
import HomeProducts from './home-products'

export default class HomeIndex extends Component {
    render() {
        return (
            <ScrollView>
                <StatusBar
                    barStyle="light-content"
                />
                <Sliders navigator={this.props.navigator}/>
                <CategoriesBar navigator={this.props.navigator}/>
                <HomeProducts/>
            </ScrollView>
        );
    }
}

