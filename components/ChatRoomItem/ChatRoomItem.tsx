import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

export default function ChatRoomItem({ chatRoom }) {

    const user = chatRoom.users[1];

    const navigation = useNavigation();

    const onPress = () => {
        console.warn('pressed on', user.name)
        navigation.navigate('ChatRoom', {id: chatRoom.id});
    }

    return (

        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/doro-sp.appspot.com/o/MALKANGIRI%2FEDIBLES%2FDKPNAIUZKAZXU6KG17IJXMK6YBZ2%2F5a2736c0-6039-40a3-b.jpg?alt=media&token=2c80a966-1548-4e77-9df6-a3434e0a35e1' }}
                style={styles.image} />
            {chatRoom.newMessages ? <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
            </View> : null}
            <View style={styles.rightContainer}>
                <View style={styles.header}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <View style={styles.messLine}>
                    <Text style={styles.mssg} numberOfLines={1} ellipsizeMode="head">{chatRoom.lastMessage.content}</Text>
                    <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/doro-sp.appspot.com/o/MALKANGIRI%2FEDIBLES%2FDKPNAIUZKAZXU6KG17IJXMK6YBZ2%2F5a2736c0-6039-40a3-b.jpg?alt=media&token=2c80a966-1548-4e77-9df6-a3434e0a35e1' }}
                        style={styles.indicator} />
                </View>
            </View>
        </Pressable>

    );
}

