import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    WebView,
    TouchableHighlight,
    StatusBar
} from 'react-native';


export default class Browser extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    barStyle="default"
                />
                <WebView
                    source={{uri: 'http://localhost:8888/prestashop/zh/'}}
                    style={styles.webView}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        top: 64
    }
});