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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as API from '../api';
import Home from  './home';
import TabNavigator from 'react-native-tab-navigator';
import * as actions from '../actions/actions'
class prestaApp extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'};
    }

    render() {
        this.props.GOTO_HOME();
        return (
            <TabNavigator
                tabBarStyle={styles.tab}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image style={styles.tabIcon}
                                             source={{uri: 'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}}/>}
                    renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                     source={{uri: 'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tab2'}
                    title="tab2"
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Image style={styles.tabIcon}
                                             source={{uri: 'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}}/>}
                    renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                     source={{uri: 'https://maxcdn.icons8.com/Share/icon/Messaging//star1600.png'}}/>}
                    onPress={() => this.setState({selectedTab: 'tab2'})}>
                    <Text>123</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab: {},
    tabIcon: {
        width: 30,
        height: 30,
        marginBottom: -5
    },
    tabTitle: {
        fontSize: 15,
        marginBottom: 2
    }
});
function mapStateToProps(state) {
    const {application} = state;

    return {
        application
    };
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(actions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(prestaApp);