import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Filho from './Filho'

const Pai = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>o numero aleatorio é?</Text>
      <Text style={{fontSize: 30}}>numero:</Text>

      <Filho min="1" max="60"/>
      
    </View>
  )
}

export default Pai

const styles = StyleSheet.create({})