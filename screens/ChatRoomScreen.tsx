import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Message from '../components/Message';
import ChatRooms from '../assets/dummy-data/Chats';
import InputBox from '../components/InputBox';
const ChatRoomScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={ChatRooms.messages}
        inverted
        renderItem={({ item }) => <Message message={item} />}
      />
      <InputBox />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default ChatRoomScreen;
