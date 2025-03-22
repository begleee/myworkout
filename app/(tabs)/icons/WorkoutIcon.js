import Svg, {Path} from 'react-native-svg'

export default function WorkoutIcon() {
    return <Svg width={24} height={24} fill={"none"} strokeWidth={"1.5px"} stroke={"#5C00FF"} strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 22.5 13.5'>
        <Path d='M16.43,12.75c2.4,0,3-1.35,3-3V3.75c0-1.65-.6-3-3-3s-3,1.35-3,3v6c0,1.65,.6,3,3,3Z'/>
        <Path d='M6.07,12.75c-2.4,0-3-1.35-3-3V3.75c0-1.65,.6-3,3-3s3,1.35,3,3v6c0,1.65-.6,3-3,3Z'/>
        <Path d='M9.07,6.75h4.36'/>
        <Path d='M21.75,9.25V4.25'/>
        <Path d='M.75,9.25V4.25'/>
    </Svg>
}