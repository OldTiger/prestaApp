import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import * as CONSTANTS from '../../constants';
import QRCamera from './camera';

export default class ScanBtn extends Component {
    constructor(props) {
        super(props);
    }

    openCamera() {
        const {navigator} = this.props;
        navigator.push({
            name: 'QRCamera',
            component: QRCamera
        });
    }

    render() {
        return (
            <TouchableHighlight style={styles.btn} onPress={this.openCamera.bind(this)}>
                <Image source={{ uri:'https://maxcdn.icons8.com/Share/icon/Security//fingerprint_scan1600.png'}}
                       style={styles.scanIcon}/>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: 30,
        marginLeft: 2,
        backgroundColor: 'rgba(246, 240, 238,0.6)',
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
        flex: 1
    },
    scanIcon: {
        width: 30,
        height: 30
    }
});