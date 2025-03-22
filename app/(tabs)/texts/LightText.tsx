import { useFonts } from 'expo-font'
import React from 'react'
import { Text, TextStyle } from 'react-native'

export default function LightText({style, children, ...props}: {style?: TextStyle, children: React.ReactNode}) {
    useFonts({
        'Inter-light': require('../../../assets/fonts/Inter_18pt-Light.ttf'),
    })
  return (
    <Text style={[{fontFamily: 'Inter-light'}, style]}>
        {children}
    </Text>
  )
}
