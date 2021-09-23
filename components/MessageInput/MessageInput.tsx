import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Feather, Foundation, FontAwesome, AntDesign } from '@expo/vector-icons';


const MessageInput = () => {

    const [message, setMessage] = useState('');

    // console.warn(message);

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClick();
        }
    }

    const sendMessage = () => {
        console.warn("sending", message);
        setMessage('');
    }

    const onPlusClick = () => {
        console.warn("plus", message);
    }

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
        >
            <View style={styles.inputContainer}>
                <Feather name="smile" size={30} color="black" style={styles.icon} />

                <TextInput
                    style={styles.input}
                    value={message}
                    placeholder="Input Message....."
                    //  onChangeText={(newMessage) => setMessage(newMessage)}
                    onChangeText={setMessage}
                />

                <Feather name="camera" size={30} color="black" style={styles.icon} />
                <Foundation name="microphone" size={30} color="black" style={styles.icon} />
            </View>
            <Pressable style={styles.buttonContainer} onPress={onPress}>
                {message ? <FontAwesome name="send" style={styles.buttonText} /> : <AntDesign name="plus" size={24} color="black" style={styles.buttonText} />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default MessageInput;

const styles = StyleSheet.create({
    root: {

        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
    input: {
        flex: 1,
        height: 50,

    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dedede',
    },
    buttonContainer: {
        width: 50,
        height: 50,
        padding:10,
        marginRight: 5,
        borderRadius: 25,
        backgroundColor: 'rgba(121, 33, 255, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
    },
});