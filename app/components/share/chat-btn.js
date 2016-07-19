import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import * as CONSTANTS from '../../constants';

export default class ChatBtn extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <TouchableHighlight style={styles.btn}>
                <Image source={{ uri:'https://cdn0.iconfinder.com/data/icons/thin-communication-messaging/57/thin-036_bubble_comment_chat_message-512.png'}}
                       style={styles.scanIcon}/>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btn:{
        width:30,
        marginRight:2,
        backgroundColor:'rgba(246, 240, 238,0.6)',
        marginTop:5,
        marginBottom:5,
        justifyContent:'center',
        flex:1
    },
    scanIcon:{
        width:30,
        height:30
    }
});