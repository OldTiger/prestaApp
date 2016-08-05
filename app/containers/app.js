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
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';

import Home from  './home';
import * as actions from '../actions/actions';

class prestaApp extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'};
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={styles.tab}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    titleStyle={styles.tabTitle}
                    renderIcon={() => <Ionicons name="ios-home-outline" size={30} color="#4F8EF7" />}
                    renderSelectedIcon={() => <Ionicons name="ios-home-outline" size={30} color="#4F8EF7"/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height:20
    },
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