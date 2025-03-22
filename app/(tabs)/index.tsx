import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DateField from './component/DateField';
import PersonalInfo from './component/PersonalInfo';
import BoldText from './texts/BoldText';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

function index() {
  return (
    <View style={styles.container}>
        <View style={styles.circle}/>
        <BoldText style={styles.header}>Персональная информация</BoldText>
        <DateField theme={true}/>
        <PersonalInfo/>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#F4EFFD',
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 22,
      paddingVertical: 16,
      gap: 16,
      overflow: 'hidden'
    },
    circle: {
      position: 'absolute',
      width: 686,
      height: 686,
      borderRadius: 343,
      backgroundColor: '#5C00FF',
      top: -330,
      left: '50%',
      transform: [{translateX: -343}],
    },
    header: {
      fontSize: 16,
      color: '#fff',
      width: '100%',
      textAlign: 'center'
    },
  }
)

export default index;