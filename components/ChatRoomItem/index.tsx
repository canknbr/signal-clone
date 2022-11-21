import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
const ChatRoomItem = ({ chatRoom }) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ChatRoomItem;
