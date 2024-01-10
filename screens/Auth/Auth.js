import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword'
import { View, Text, Button, Image, TextInput, ScrollView, StyleSheet } from "react-native"
import logo from '../../images/logo.png'

const Auth = ({navigation}) => {

  const [login, setLogin] = useState(true)
  const [register, setRegister] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)

  const openLogin = () => {
    setRegister(false)
    setResetPassword(false)
    setLogin(true)
  }

  const openRegister = () => {
    setLogin(false)
    setResetPassword(false)
    setRegister(true)
  }

  const openResetPassowrd = () => {
    setRegister(false)
    setLogin(false)
    setResetPassword(true)
  }

  const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.center} className="flex flex-col pt-20 bg-gray-100 w-full">
      <Image className="w-24 h-24 mb-2" source={logo} alt="logo"/>
      <View className="flex items-center w-full">
        <Text className="sm:text-6xl text-5xl font-bold text-blue-600 mb-8">Build<Text className="!text-red-600">buddy</Text></Text>
      </View>
      {login === true && <Login openResetPassword={openResetPassowrd} openRegister={openRegister}/>}
      {register === true && <Register openLogin={openLogin}/>}
      {resetPassword === true && <ResetPassword openLogin={openLogin}/>}
    </ScrollView>
  )
}

export default Auth