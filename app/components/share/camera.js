'use strict';
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Platform
} from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-universal';

export default class QRCamera extends Component {
    render() {
        let scanArea = null
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            )
        }

        return (
            <BarcodeScanner
                onBarCodeRead={(code) => console.log(code)}
                style={styles.camera}>
                {scanArea}
            </BarcodeScanner>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }
})
