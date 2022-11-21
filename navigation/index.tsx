import { Feather } from '@expo/vector-icons';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {
  ColorSchemeName,
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        width,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>
        Signal
      </Text>
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <Feather name="edit-2" size={24} color="black" />
      </View>
    </View>
  );
};

const ChatRoomHeader = props => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        width,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, flex: 1 }}
      >
        {props.children}
      </Text>
      <View style={{ flexDirection: 'row', marginRight: 60 }}>
        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <Feather name="edit-2" size={24} color="black" />
      </View>
    </View>
  );
};
