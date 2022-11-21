import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../assets/dummy-data/ChatRooms';
const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default HomeScreen;
