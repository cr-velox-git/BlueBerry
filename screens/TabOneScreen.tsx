import * as React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem/index';

import chatRoomData from '../assets/ChatRoom';



export default function TabOneScreen() {
  return (
    <View style={styles.page}>
     
     
      <FlatList
      data= {chatRoomData}
      renderItem= {({item : data})=> <ChatRoomItem chatRoom={data}/> }
      showsVerticalScrollIndicator={false}
      />     
      
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: '100%',
    
  },
});

