/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import * as API from './api';
import Home from  './containers/home';

export default class prestaApp extends Component {
    componentDidMount() {

    }

    componentWillUnMount() {

    }

    render() {
        return (
            <Home/>
        );
    }
}


