'use strict';
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Platform,
    Image
} from 'react-native';
import Product from '../share/product';

export default class HomeProducts extends Component {
    render() {
        let products = [];
        let imageUrls = this.props.imageUrls || [
                'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg',
                'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg',
                'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg',
                'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg'
            ];
        imageUrls.forEach(function (url, index) {
            products.push(
                <Product imageUrl={url} key={index}/>
            )
        });
        return (
            <View style={styles.container}>
                {products}
            </View>
        );
    }
}
const  styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
});