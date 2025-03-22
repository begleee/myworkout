import { TabTrigger } from 'expo-router/ui'
import Svg, {Path} from 'react-native-svg'

export default function CalendarIcon() {
    return <Svg width={24} height={24} fill={"none"} strokeWidth={"1.5px"} stroke={"#5C00FF"} strokeMiterlimit={10} strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 23.5 21.45'>
            <Path d='M21.68,5.46l-3.37,13.53c-.24,1.01-1.14,1.71-2.18,1.71H2.99c-1.51,0-2.59-1.48-2.14-2.93L5.06,4.25c.29-.94,1.16-1.59,2.14-1.59h12.3c.95,0,1.74,.58,2.07,1.38,.19,.43,.23,.92,.11,1.42Z'/>
            <Path d='M15.75,20.7h4.78c1.29,0,2.3-1.09,2.21-2.38l-.99-13.62'/>
            <Path d='M9.43,5.08L10.47,.76'/>
            <Path d='M16.13,5.09l.94-4.34'/>
            <Path d='M7.45,10.7H15.45'/>
            <Path d='M6.45,14.7H14.45'/>
        </Svg>
}