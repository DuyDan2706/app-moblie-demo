import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
function GirlScreen() {
  return (
   <View>
    <Header centerComponent={{text: 'Cho bạn nữ',style :{color:'#fff'}}} />
      <View style={styles.page}>
        <View>
        <Input label="Mã số gấu" placeholder='Nhập mã gấu đực tại đây' />
    <Button title='Xác nhận' />
        </View>
        <View style={{marginTop: 30}}>
<Text style={styles.Heading}> Triệu hồi người yêu</Text>
         <View style={styles.ButtonContainer}>
            <TouchableOpacity style={[styles.SummonButton, styles.redButton]}>
                <Text style={styles.buttonText}>🙆🏻‍♀️ Em đói quá?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.SummonButton, styles.blueButton]}>
                <Text style={styles.buttonText}>🧋Thèm trà sữa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.SummonButton, styles.greenButton]}>
                <Text style={styles.buttonText}>🙃 Nhớ anh quá?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.SummonButton, styles.yellowButton]}>
                <Text style={styles.buttonText}>👻 Gọi em nha</Text>
            </TouchableOpacity>
         </View>
        </View>
        
  </View>
      </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 0,
  },
  SummonButton: {
    flex: 0,
    width: '48%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    height: 150,
    justifyContent: 'center',
  },
  redButton: {
    backgroundColor: '#FF0000', // Đỏ
  },
  blueButton: {
    backgroundColor: '#007AFF', // Xanh da trời
  },
  greenButton: {
    backgroundColor: '#34C759', // Xanh lá
  },
  yellowButton: {
    backgroundColor: '#FFCC00', // Vàng
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  Heading :{
  textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  }
})


export default GirlScreen