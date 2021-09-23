import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Message from '../components/Message';
import chatRoomData from '../assets/DummyData/Chat';
import MessageInputer from '../components/MessageInput/index'
import {useRoute, useNavigation} from '@react-navigation/core';

export default function ChatRoomScreen() {

    const route = useRoute();
    const navigation = useNavigation();

    console.warn("Displaying chat room: ",route.params?.id)

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