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
import * as CONSTANT from '../../constants';

export default class Product extends Component {
    render() {
        return (
            <TouchableHighlight>
                <View style={styles.container}>
                    <Image source={{uri:this.props.imageUrl}} style={styles.productImage}/>
                    <Text style={styles.productName}>这是产品名字,这是产品名字,这是产品名字</Text>
                    <View>
                        <Text style={styles.price}>123</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:CONSTANT.WINDOW_WIDTH/2 - 10,
        height:250,
        marginLeft:5,
        marginRight:5,
        marginTop:5
    },
    productImage:{
        height:180,
        flex:1
    },
    productName:{
        width:CONSTANT.WINDOW_WIDTH/2 - 10
    },
    price:{
        width:CONSTANT.WINDOW_WIDTH/2 - 10
    }
});