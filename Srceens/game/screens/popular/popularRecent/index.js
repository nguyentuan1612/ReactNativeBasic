import { View, Text,Image } from 'react-native'
import React from 'react'

const Recent = (Props) => {
  return (
    <View style={{marginLeft:16, marginTop:16}}>
        <Image source={{uri:Props.image}} style={{width: 200, height: 120, borderRadius: 8}}/>
    </View>
  )
}

export default Recent