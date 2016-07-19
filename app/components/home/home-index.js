import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import * as API from '../../api';
import {Sliders} from  '../../components/share/slider';
export default class HomeIndex extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    barStyle="light-content"
                />
                <Sliders navigator={this.props.navigator}/>
            </View>
        );
    }
}

