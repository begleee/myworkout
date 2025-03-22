import React from 'react'
import Svg, {Path} from 'react-native-svg'

export default function UserIcon() {
    return <Svg width={24} height={24} fill={"none"} strokeWidth={'1.5px'} stroke={"#5C00FF"} strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 18.68 21.5'>
        <Path d="M9.34,10.75c2.76,0,5-2.24,5-5S12.1,.75,9.34,.75,4.34,2.99,4.34,5.75s2.24,5,5,5Z"/>
        <Path d="M17.93,20.75c0-3.87-3.85-7-8.59-7S.75,16.88,.75,20.75"/>
    </Svg>
}