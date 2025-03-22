import { useFonts } from 'expo-font'
import React from 'react'
import { Text, TextStyle } from 'react-native'

export default function BlackText({style, children, ...props}: {style?: TextStyle, children: React.ReactNode}) {
    const [fontsLoaded] = useFonts({
        'Inter-regular': require('../../../assets/fonts/Inter_18pt-Black.ttf'),
    })
  return (
    <Text style={[{fontFamily: 'Inter-black'}, style]}>
        {children}
    </Text>
  )
}
