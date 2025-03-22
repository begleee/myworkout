import { useFonts } from 'expo-font'
import React from 'react'
import { Text, TextStyle } from 'react-native'

export default function RegularText({style, children, ...props}: {style?: TextStyle, children: React.ReactNode}) {
    useFonts({
        'Inter-regular': require('../../../assets/fonts/Inter_18pt-Regular.ttf'),
    })
  return (
    <Text style={[{fontFamily: 'Inter-regular'}, style]}>
        {children}
    </Text>
  )
}
