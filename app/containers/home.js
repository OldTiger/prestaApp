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
            return <ScanBtn navigator={navigator}/>;
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

    hideNavBar() {
        if (this.state.navBarHide) {
            return null;
        } else {
            return <Navigator.NavigationBar routeMapper={ NavigationBarRouteMapper } style={styles.navigationBar}/>;
        }
    }

    renderScene(route, navigator) {
        if (route.component) {
            const Com = route.component;
            return <Com navigator={navigator} route={route} {...this.props} />
        }
    }

    render() {
        return (
            <Navigator
                style={{ flex:1 }}
                initialRoute={{ component: HomeIndex,title:'Home' }}
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

