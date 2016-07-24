/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import * as API from './api';
import Home from  './containers/home';
import TabNavigator from 'react-native-tab-navigator';

export default class prestaApp extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'};
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={styles.tab}
                sceneStyle={{ paddingBottom: 0 }}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tab2'}
                    title="tab2"
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    onPress={() => this.setState({ selectedTab: 'tab2' })}>
                    <Text>123</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tab3'}
                    title="tab3"
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    onPress={() => this.setState({ selectedTab: 'tab3' })}>
                    <Text>123</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tab4'}
                    title="tab4"
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={{uri:'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}} />}
                    onPress={() => this.setState({ selectedTab: 'tab4' })}>
                    <Text>123</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab:{
        height:0,
        overflow:'hidden'
    },
    tabIcon: {
        width: 30,
        height: 30,
        marginBottom:-5
    },
    tabTitle: {
        fontSize:15,
        marginBottom:2
    }
});