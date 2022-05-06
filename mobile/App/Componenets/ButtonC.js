import React from 'react'
import {View,Button,Text} from 'react-native';

const ButtonC = ({title}) => {
  return (
    <Button
     title={title}
     color='#8FBC8F'
     onPress={() => console.warn('Pressed')} />
  )
}

export default ButtonC;