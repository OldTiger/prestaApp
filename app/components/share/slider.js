import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar'
import Swiper from 'react-native-swiper';

const SLIDERS_HEIGHT = 180;

class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrls: [
                'http://localhost:8888/prestashop/modules/homeslider/images/sample-1.jpg',
                'http://localhost:8888/prestashop/modules/homeslider/images/sample-2.jpg',
                'http://localhost:8888/prestashop/modules/homeslider/images/sample-3.jpg'
            ]
        };
    }

    onPressSlide(index) {
        this.props.navigator.push({
            component: 'WebView',
            title: '',
            href: this.state.imageUrls[index]
        });
    }

    render() {
        let rows = [];
        this.state.imageUrls.forEach(function (imageUrl, index) {
            rows.push(
                <TouchableHighlight onPress={this.onPressSlide.bind(this,index)}
                                    activeOpacity={0.6}
                                    underlayColor={'white'}
                                    key={index} style={styles.touch}>
                    <Image source={{ uri:imageUrl}}
                           indicator={ProgressBar}
                           style={styles.slide}
                    />
                </TouchableHighlight>
            );
        }.bind(this));
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={SLIDERS_HEIGHT}>
                {rows}
            </Swiper>
        );
    }
}
let styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    touch: {
        flex: 1
    }
});

export {
    Sliders
};