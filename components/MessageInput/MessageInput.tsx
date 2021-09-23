import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <TextInput />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>+</Text>
            </View>
        </View>
    )
}

export default MessageInput;

const styles = StyleSheet.create({
    root: {
        
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    emojyContainer: {

    },
    inputContainer: {
        flex: 1,
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
    },
    buttonContainer: {
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 25,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
    },
});