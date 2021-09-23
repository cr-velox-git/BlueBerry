/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome } from '@expo/vector-icons';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View, Image, useWindowDimensions } from 'react-native';


import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen name='ChatRoom'
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader, }}

      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {

  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

      }}
    >
      <Image
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/doro-sp.appspot.com/o/MALKANGIRI%2FEDIBLES%2FDKPNAIUZKAZXU6KG17IJXMK6YBZ2%2F5a2736c0-6039-40a3-b.jpg?alt=media&token=2c80a966-1548-4e77-9df6-a3434e0a35e1' }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>BlueBerry</Text>
      <View style={{ flexDirection: 'row' }}>
        <Feather name="camera" size={24} color='black'
          style={{ marginRight: 15 }}
        />
        <Feather name="edit-2" size={24} color='black'
          style={{ marginRight: 15 }}
        />
      </View>
    </View>
  )
}

const ChatRoomHeader = (props) => {

  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width: width - 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,


      }}
    >
      <Image
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/doro-sp.appspot.com/o/MALKANGIRI%2FEDIBLES%2FDKPNAIUZKAZXU6KG17IJXMK6YBZ2%2F5a2736c0-6039-40a3-b.jpg?alt=media&token=2c80a966-1548-4e77-9df6-a3434e0a35e1' }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold'
        }}>BlueBerry</Text>
      <View style={{ flexDirection: 'row' }}>
        <Feather name="video" size={24} color='black'
          style={{ marginRight: 15 }}
        />
        <Feather name="phone" size={24} color='black'
          style={{ marginRight: 15 }}
        />
        <Feather name="menu" size={24} color='black'
          style={{ marginRight: 15 }}
        />
      </View>
    </View>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
