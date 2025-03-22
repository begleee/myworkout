import React, { useState } from 'react'
import moment from 'moment';
import { View, StyleSheet, Text } from 'react-native'
import Svg, {Path} from 'react-native-svg'
import RegularText from '../texts/RegularText';

function DateField({theme}: {theme: boolean}) {
  let now = moment().format('DD.MM.YYYY');
  return (
    <View style={styles.dateField}>
        <RegularText style={theme ? styles.dateLight : styles.dateDark}>{now}</RegularText>
          <Svg width={24} height={24} fill="none" stroke={theme ? '#fff' : '#000'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 19.5 21.28">
          <Path d="M.75,7.75v5.77q0,2.12,2,3.47l5.5,3.18c.83,.48,2.18,.48,3,0l5.5-3.18q2-1.35,2-3.46V7.75q0-2.11-2-3.46L11.25,1.11c-.82-.48-2.17-.48-3,0L2.75,4.29Q.75,5.64,.75,7.75Z"/>
          <Path d="M9.75,13.64c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"/>
        </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  dateField: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center'
  },
  dateLight: {
    fontSize: 12,
    color: '#fff',
    width: '50%'
  },
  dateDark: {
    fontSize: 12,
    color: '#000',
    width: '50%'
  }
})

export default DateField; 