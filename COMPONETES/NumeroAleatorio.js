import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NumeroAleatorio(props) {
  const {min, max} = props

  const delta = max - min 
  const numeroAleatorio = Math.floor(Math.random() * delta) + min

  return(
    <View>
      <Text>o numero aleatorio é: {numeroAleatorio}</Text>
    </View>
  )
}


const styles = StyleSheet.create({})
