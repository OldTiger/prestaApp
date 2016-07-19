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
import * as API from '../api';
import HomeIndex from  '../components/home/home-index';
import SearchBar from '../components/share/search-bar';
import ScanBtn from '../components/share/scan-btn';
import ChatBtn from '../components/share/chat-btn';

let NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <TouchableHighlight
                    style={styles.leftNavButton}
                    underlayColor="transparent"
                    onPress={() => { if (index > 0) { navigator.pop() } }}>
                    <Text style={ styles.NavButtonText }>返回</Text>
                </TouchableHighlight>)
        }
        else if (index == 0) {
            return <ScanBtn/>;
        }
    },
    Title(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <Text style={styles.NavTitle}>标题</Text>
            )
        } else if (index == 0) return <SearchBar/>;

    },
    RightButton (route, navigator, index, navState) {
        if (index == 0) {
            return (
                <ChatBtn/>
            );
        }
    }
};


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarHide: false
        };
    }

    componentDidMount() {

    }

    hideNavBar() {
        if (this.state.navBarHide) {
            return null;
        } else {
            return <Navigator.NavigationBar routeMapper={ NavigationBarRouteMapper } style={styles.navigationBar}/>;
        }
    }

    componentWillUnMount() {

    }

    renderScene(route, navigator) {
        if (route.component == 'HomeIndex') {
            return <HomeIndex navigator={navigator}/>
        } else if (route.component == 'WebView') {
            return (
                <View style={{flex:1}}>
                    <StatusBar
                        barStyle="default"
                    />
                    <WebView
                        source={{uri: 'http://localhost:8888/prestashop/zh/'}}
                        style={styles.webView}
                    />
                </View>);
        }
    }

    render() {
        return (
            <Navigator
                style={{ flex:1 }}
                initialRoute={{ component: 'HomeIndex',title:'Home' }}
                renderScene={ this.renderScene }
                navigationBar={<Navigator.NavigationBar routeMapper={ NavigationBarRouteMapper } style={styles.navigationBar} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        top: 64
    },
    navigationBar: {
        height: 0
    },
    leftNavButton: {
        paddingLeft: 10
    },
    rightNavButton: {
        paddingRight: 10
    },
    NavButtonText: {
        fontSize: 16,
        marginVertical: 10
    },
    NavTitle: {
        fontSize: 17,
        marginVertical: 10
    }

});

