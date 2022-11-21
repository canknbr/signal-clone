import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import styles from './styles';
const InputBox = () => {
  const [message, setMessage] = useState('');
  const sendMessage = () => {
    console.warn(`Sending: ${message}`);
    setMessage('');
  };
  const onPlusClicked = () => {
    console.warn('On Plus Clicked');
  };
  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.row}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          placeholder="Signal message..."
        />
        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
          style={styles.icon}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        {message ? (
          <Ionicons name="send" size={20} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default InputBox;
