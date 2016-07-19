import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import * as CONSTANTS from '../../constants';

export default class SearchBar extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri:'https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png'}}
                       style={styles.searchIcon}/>
                <Text style={styles.containerText}>719做颜值型男,我们是认真的</Text>
                <Image source={{ uri:'https://www.materialui.co/materialIcons/action/settings_voice_grey_192x192.png'}}
                       style={styles.voiceInputIcon}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        marginTop:5,
        marginBottom:5,
        flex:1,
        width: CONSTANTS.WINDOW_WIDTH*0.8,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        borderRadius: 5,
        backgroundColor:'rgba(246, 240, 238,0.6)'
    },
    containerText:{
        color:'white',
        fontSize:16
    },
    searchIcon:{
        width:20,
        height:20
    },
    voiceInputIcon:{
        width:20,
        height:20
    }

});
