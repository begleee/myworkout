import { useFonts } from 'expo-font'
import React from 'react'
import { Text, TextStyle } from 'react-native'

export default function BoldText({style, children, ...props}: {style?: TextStyle, children: React.ReactNode}) {
    useFonts({
        'Inter-bold': require('../../../assets/fonts/Inter_18pt-Bold.ttf'),
    })
  return (
    <Text style={[{fontFamily: 'Inter-bold'}, style]}>
        {children}
    </Text>
  )
}
