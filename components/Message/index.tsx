import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
const myId = 'u1';
const grey = 'lightgrey';
const blue = '#3777f0';
const Message = ({ message }) => {
  const isMyMessage = message.user.id === myId;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage ? grey : blue,
          alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isMyMessage ? 'black' : 'white',
          },
        ]}
      >
        {message.content}
      </Text>
    </View>
  );
};

export default Message;
