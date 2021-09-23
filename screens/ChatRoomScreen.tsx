import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Message from '../components/Message';
import chatRoomData from '../assets/DummyData/Chat';
import MessageInputer from '../components/MessageInput/index'

export default function ChatRoomScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={chatRoomData.message}
                renderItem={({ item: chat }) => <Message message={chat} />}
                inverted
            />
            <MessageInputer/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})