import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as API from '../api';
import {Sliders} from  '../components/share/slider';

export default class Home extends Component {
    componentDidMount() {

    }

    componentWillUnMount() {

    }

    render() {
        return (
            <View>
                <Sliders></Sliders>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 150
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

