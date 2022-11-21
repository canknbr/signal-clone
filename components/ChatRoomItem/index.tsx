import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
const ChatRoomItem = ({ chatRoom }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.id,
      name: chatRoom.users[1].name,
    });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: chatRoom.users[1].imageUri }}
      />
      {chatRoom.newMessage && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chatRoom.users[1].name}
          </Text>
          <Text style={styles.text}>
            {dayjs(chatRoom.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
