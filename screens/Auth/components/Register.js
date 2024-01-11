import { useState } from "react";
import { TextInput, View, Text, Button, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import clientIcon from '../../../images/clientIcon.png';
import contractorIcon from '../../../images/contractorIcon.png';

const Register = ({openLogin}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)
  const [accountTypeSelect, setAccountTypeSelect] = useState(true)
  const [textInputs, setTextInputs] = useState(false)
  const [accountType, setAccountType] = useState('')

  const toggleVisibility = () => {
    setSecureTextEntry(secureTextEntry === true ? false : true)
  }

  const inputStyle = "w-full shadow-md rounded px-4 py-2 outline-none border-2 border-transparent duration-100 focus:border-blue-700 bg-white"
  
  return (
    <View className="flex items-center flex-col w-80 h-full pb-96">
      {accountTypeSelect === true && 
        <View className="flex flex-col items-center text-2xl">
         <Text className="font-bold text-xl">Are you a client or a contractor?</Text>
         <View className="flex flex-row mt-8 w-[340px] justify-between">
            <Pressable className="flex flex-col items-center" onPress={() => {setAccountType('client')}}>
              <Image className="h-40 w-40" source={clientIcon} alt="client"/>
              <Text className="font-bold text-xl my-2">Client</Text>
              <View className={accountType != 'client' && 'opacity-0'}>
                <AntDesign name="checkcircle" size={24} color="lime"/>
              </View>
            </Pressable>
            <Pressable className="flex flex-col items-center" onPress={() => {setAccountType('contractor')}}>
              <Image className="h-40 w-40" source={contractorIcon} alt="contactor"/>
              <Text className="font-bold text-xl my-2">Contractor</Text>
              <View className={accountType != 'contractor' && 'opacity-0'}>
                <AntDesign name="checkcircle" size={24} color="lime"/>
              </View>
            </Pressable>
         </View>
         <Text 
           onPress={() => {{setAccountTypeSelect(false); setTextInputs(true)}}} 
           className={`${accountType === '' ? 'bg-gray-400 pointer-events-none' : 'bg-blue-600'} text-white font-bold mt-8 text-xl px-6 py-3`}
         >
           Continue
         </Text>
       </View>
      }
      {textInputs === true && 
        <>
          <TextInput placeholder="First Name" value={firstName} className={inputStyle} onChangeText={setFirstName} />
          <TextInput placeholder="Last Name" value={lastName} className={`${inputStyle} my-4`} onChangeText={setLastName} />
          <TextInput placeholder="Email" value={email} className={inputStyle} onChangeText={setEmail} />
          <TextInput placeholder="Phone" value={phone} className={`${inputStyle} my-4`} onChangeText={setPhone} />
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
          <Pressable className={`${inputStyle} ${passwordFocus === true && 'border-blue-700'} border-2 flex flex-row w-full justify-between items-center my-4 p-0 !pr-4`}>
            <TextInput
              className="outline-none pl-4 py-2 w-72" 
              placeholder="Confirm Password" 
              value={confirmPassword}  
              secureTextEntry={secureTextEntry}
              onChangeText={setConfirmPassword} 
              onFocus={() => {setConfirmPasswordFocus(true)}}
              onBlur={() => {setConfirmPasswordFocus(false)}}
            />
            <Ionicons onPress={toggleVisibility} style={{margin:-5}} name={secureTextEntry === true ? 'eye' : 'eye-off'} size={24} />
          </Pressable>
          <Text 
            onPress={() => {{setAccountTypeSelect(false); setTextInputs(true)}}} 
            className={`${
              firstName === '' || lastName === '' || number === '' ||  email === '' || password === ''|| confirmPassword === '' ? 'bg-gray-400 pointer-events-none' : 'bg-blue-600'} text-white font-bold mt-8 text-xl px-6 py-3`}
          >
           Register
         </Text>
        </>
      }
      <Text className="font-bold mt-8">Already have an account? Tap <Text className="text-blue-600 cursor-pointer" onPress={openLogin}>here</Text> to log in.</Text>
    </View>
  )
}

export default Register