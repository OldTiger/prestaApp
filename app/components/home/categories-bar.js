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
class Category extends Component {
    jumpToCategoryPage(href){

    }
    render() {
        return (
            <TouchableHighlight onPress={this.jumpToCategoryPage(this.props.href)}>
                <View  style={styles.category}>
                    <Image source={{uri:this.props.imageUrl}} style={styles.categoryImage}/>
                    <Text style={styles.categoryText}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}
export default class CategoriesBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
                {name: '京东超市', imageUrl: 'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg', href: 'http://www.baidu.com'},
            ]
        }
    }

    render() {
        let categories = [];
        this.state.categories.forEach(function (category, index) {
            categories.push(
                <Category navigator={this.props.navigator} {...category} key={index} />
            )
        }.bind(this));
        return (
            <View style={styles.categoriesBar}>
                {categories}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    categoriesBar:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingVertical:10,
        borderBottomWidth:0.5
    },
    category:{
        width:CONSTANT.WINDOW_WIDTH/4,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:3
    },
    categoryImage:{
        width:50,
        height:50,
    },
    categoryText:{
        marginTop:4,
        fontSize:14,
        color:'#8B8B8B'
    }
});