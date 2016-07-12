import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Carousel from 'react-native-carousel';

let RNCarousel = React.createClass({
    render: function() {
        return (
            <Carousel width={375}>
                <View style={styles.container}>
                    <Text>Page 1</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 2</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 3</Text>
                </View>
            </Carousel>
        );
    }
});

let styles = StyleSheet.create({
    container: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

export {
    RNCarousel as Slider
}