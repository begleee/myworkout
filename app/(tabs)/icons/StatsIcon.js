import Svg, {Path} from 'react-native-svg'

export default function StatsIcon() {
     return <Svg width={24} height={24} fill={"none"} strokeWidth={"1.5px"} stroke={"#5C00FF"} strokeLinecap='round' strokeLinejoin='round' viewBox="0 0 19.5 21.5">
        <Path d='M.75,20.75H18.75'/>
        <Path d='M3.35,7.13H1.75c-.55,0-1,.45-1,1v8.62c0,.55,.45,1,1,1h1.6c.55,0,1-.45,1-1V8.13c0-.55-.45-1-1-1Z'/>
        <Path d='M10.55,3.94h-1.6c-.55,0-1,.45-1,1v11.81c0,.55,.45,1,1,1h1.6c.55,0,1-.45,1-1V4.94c0-.55-.45-1-1-1Z'/>
        <Path d='M17.75,.75h-1.6c-.55,0-1,.45-1,1v15c0,.55,.45,1,1,1h1.6c.55,0,1-.45,1-1V1.75c0-.55-.45-1-1-1Z'/>
    </Svg>
}