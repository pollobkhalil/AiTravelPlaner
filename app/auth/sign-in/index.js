import { View, Text } from 'react-native'
import React from 'react'

export default function SingIn() {
  return (
    <View style={{
      padding:25,
      marginTop:60,
      backgroundColor:'white',
      height:'100%',
    }}>
      <Text style={{
        fontFamily:'bold',
        fontSize: 30,
        fontFamily: 'Outfit-Bold',
        paddingBottom:20

      }}>Let's Sign You In </Text>
      <Text style={{
        
        fontSize: 20,
        fontFamily:'Outfit-Regular'
      }}>Welcome Back </Text>
      <Text style={{
        fontSize: 30,
        
      }}> You've been missed </Text>
    </View>
  )
}