import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const myID = 'u1';


const Message = ({message}) => {
    //we will have different style according to sent or recive message
    const isMe = message.user.id === myID;
    return (
        <View style={[styles.container, isMe ? styles.rightContainer: styles.leftContainer]}>
            <Text style={{ color: isMe ? 'white' : 'black' }}>{message.content}</Text>
        </View>
    );
}

export default Message;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 15,
        maxWidth: '70%',
    
    },
    leftContainer: {
        backgroundColor: 'lightgray',
        marginLeft: 'auto',
        marginRight: 10,
    },
    rightContainer: {

        backgroundColor: '#4F86F7',
        marginLeft: 10,
        marginRight: 'auto',
        
      
        
    },

});