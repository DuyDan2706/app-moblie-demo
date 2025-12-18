import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import { styleComponent } from '../components'
import * as Notifications from 'expo-notifications';

async function getNotification() {
    const status = await Notifications.getPermissionsAsync();
    if(status.status !== 'granted') {
     const request = await Notifications.requestPermissionsAsync();
     if(request.status !== 'granted') {
      alert('Bạn cần cho phép thông báo để sử dụng tính năng này');
      return;
     }
    }
    const tokenData = await Notifications.getExpoPushTokenAsync();
    const token = tokenData.data;
    console.log('Token thông báo:', token);
    return token;
}

export default function BoyScreen() {
  return (
   <View>
    <Header centerComponent={{text: 'Cho bạn nữ',style :{color:'#fff'}}} />
  <View style={styleComponent.page}>
    <Text style={styleComponent.Heading}> Mời bạn nam nhập mã số gấu cái</Text>
    <Input label="Mã số gấu" placeholder='Nhập mã gấu cái tại đây' />
    <Button title='Bấm để lấy mã số' onPress={getNotification} />
  </View>
   </View>
  )
}


