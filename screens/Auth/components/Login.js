import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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
    <View className="flex items-center flex-col w-80 pb-96">
      <TextInput placeholder="Email" value={email} className={inputStyle} onChangeText={setEmail} />
      <View className={`${inputStyle} ${passwordFocus === true && 'border-blue-700'} border-2 flex flex-row w-full justify-between my-4`}>
        <TextInput 
          className="w-fit outline-none" 
          placeholder="Password" 
          value={password}  
          secureTextEntry={secureTextEntry}
          onChangeText={setPassword} 
          onFocus={() => {setPasswordFocus(true)}}
          onBlur={() => {setPasswordFocus(false)}}
        />
        {secureTextEntry === true && <Ionicons onPress={toggleVisibility} style={{margin:-5}} name="eye" size={24} />}
        {secureTextEntry === false && <Ionicons onPress={toggleVisibility} style={{margin:-5}} name="eye-off" size={24} />}
      </View>
      <Text 
           onPress={firebaseLogin}
           className={`${email === '' || password === '' ? 'bg-gray-400 pointer-events-none' : 'bg-blue-600'} text-white font-bold my-4 text-xl px-6 py-3`}
         >
           Login
         </Text>
      <Text className="font-bold my-4">Forgot your password? Click <Text className="text-blue-600 cursor-pointer" onPress={openResetPassword}>here</Text> to reset it.</Text>
      <Text className="font-bold">Don't have an account? Click <Text className="text-blue-600 cursor-pointer" onPress={openRegister}>here</Text> to register.</Text>
    </View>
  )
}

export default Login