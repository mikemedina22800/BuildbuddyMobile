import { useState } from "react";
import { TextInput, View, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import Toast from "react-native-root-toast";

const Login = ({openResetPassword, openRegister}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const firebaseLogin = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      Toast.show('Logged in!')
      return res
    } catch(err) {
      Toast.show(String(err))
    }
  }

  const toggleVisibility = () => {
    setSecureTextEntry(secureTextEntry === true ? false : true)
  }

  const inputStyle = "w-full shadow-md rounded px-4 py-2 outline-none border-2 border-transparent duration-100 focus:border-blue-700 bg-white"
  
  return (
    <View className="flex items-center flex-col w-80 pb-[420px]">
      <TextInput placeholder="Email" value={email} className={inputStyle} onChangeText={setEmail} />
      <Pressable className={`${inputStyle} ${passwordFocus === true && 'border-blue-700'} border-2 flex flex-row w-full justify-between items-center my-4 p-0 !pr-4`}>
        <TextInput
          className="outline-none pl-4 py-2 w-72" 
          placeholder="Password" 
          value={password}  
          secureTextEntry={secureTextEntry}
          onChangeText={setPassword} 
          onFocus={() => {setPasswordFocus(true)}}
          onBlur={() => {setPasswordFocus(false)}}
        />
        <Ionicons onPress={toggleVisibility} style={{margin:-5}} name={secureTextEntry === true ? 'eye' : 'eye-off'} size={24} />
      </Pressable>
      <Text onPress={firebaseLogin} className={`${email === '' || password === '' ? 'bg-gray-400 pointer-events-none' : 'bg-blue-600'} text-white font-bold my-4 text-xl px-6 py-3`}>Login</Text>
      <Text className="font-bold my-4">Forgot your password? Tap <Text className="text-blue-600 cursor-pointer" onPress={openResetPassword}>here</Text> to reset it.</Text>
      <Text className="font-bold">Don't have an account? Tap <Text className="text-blue-600 cursor-pointer" onPress={openRegister}>here</Text> to register.</Text>
    </View>
  )
}

export default Login