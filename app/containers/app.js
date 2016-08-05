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
import * as CONSTANTS from '../constants';

const TAB_1_ICON = 'ios-home-outline';
const TAB_2_ICON = 'ios-list-box-outline';
const TAB_3_ICON = 'ios-cart-outline';
const TAB_4_ICON = 'ios-person-outline';

class prestaApp extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'};
    }

    render() {
        return (
            <TabNavigator tabBarStyle={{height: CONSTANTS.STYLES.TAB.TAB_HEIGHT, overflow: 'hidden'}}
                          sceneStyle={{paddingBottom: CONSTANTS.STYLES.TAB.TAB_HEIGHT}}>
                {/*fix title is empty bug use title style*/}
                {/*tab1*/}
                <TabNavigator.Item
                    title="home"
                    titleStyle={{height: 0}}
                    selected={this.state.selectedTab === 'home'}
                    renderIcon={() => <Ionicons name={TAB_1_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                color={CONSTANTS.STYLES.TAB.COLOR}/>}
                    renderSelectedIcon={() => <Ionicons name={TAB_1_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                        color={CONSTANTS.STYLES.TAB.SELECTED_COLOR}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>
                {/*tab2*/}
                <TabNavigator.Item
                    title="categories"
                    titleStyle={{height: 0}}
                    selected={this.state.selectedTab === 'categories'}
                    renderIcon={() => <Ionicons name={TAB_2_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                color={CONSTANTS.STYLES.TAB.COLOR}/>}
                    renderSelectedIcon={() => <Ionicons name={TAB_2_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                        color={CONSTANTS.STYLES.TAB.SELECTED_COLOR}/>}
                    onPress={() => this.setState({selectedTab: 'categories'})}>
                    <Ionicons name={TAB_2_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                              color={CONSTANTS.STYLES.TAB.COLOR}/>
                </TabNavigator.Item>
                {/*tab3*/}
                <TabNavigator.Item
                    title="shopcart"
                    titleStyle={{height: 0}}
                    selected={this.state.selectedTab === 'shopcart'}
                    renderIcon={() => <Ionicons name={TAB_3_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                color={CONSTANTS.STYLES.TAB.COLOR}/>}
                    renderSelectedIcon={() => <Ionicons name={TAB_3_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                        color={CONSTANTS.STYLES.TAB.SELECTED_COLOR}/>}
                    onPress={() => this.setState({selectedTab: 'shopcart'})}>
                    <Ionicons name={TAB_3_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                              color={CONSTANTS.STYLES.TAB.COLOR}/>
                </TabNavigator.Item>
                {/*tab4*/}
                <TabNavigator.Item
                    title="person"
                    titleStyle={{height: 0}}
                    selected={this.state.selectedTab === 'person'}
                    renderIcon={() => <Ionicons name={TAB_4_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                color={CONSTANTS.STYLES.TAB.COLOR}/>}
                    renderSelectedIcon={() => <Ionicons name={TAB_4_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                                                        color={CONSTANTS.STYLES.TAB.SELECTED_COLOR}/>}
                    onPress={() => this.setState({selectedTab: 'person'})}>
                    <Ionicons name={TAB_4_ICON} size={CONSTANTS.STYLES.TAB.ICON_SIZE}
                              color={CONSTANTS.STYLES.TAB.COLOR}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 20
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
        ...bindActionCreators(actions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(prestaApp);