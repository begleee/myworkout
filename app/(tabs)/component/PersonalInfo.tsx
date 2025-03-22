import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import BoldText from '../texts/BoldText';
import NameField from './NameField';
import Field from './Field';
import EditIcon from '../icons/EditIcon'
import TickIcon from '../icons/TickIcon'

export default function PersonalInfo() {
  const [userName, setUserName] = useState('');
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(60);
  const [isEdit, setEdit] = useState(false);

  let imt = (weight / (height / 100) ** 2).toFixed(2);

  return (
    <View style={styles.container}>
        <NameField isEdit={isEdit} userName={userName} setUserName={setUserName}/>

        <Field param='рост' isEdit={isEdit} val={height} setVal={setHeight} measure='см'/>

        <Field param=' вес' isEdit={isEdit} val={weight} setVal={setWeight} measure='кг'/>

        <View style={styles.field}>
          <BoldText style={{fontSize: 20}}>имт(kg/m²)</BoldText>
          <View style={[styles.info, {justifyContent: 'flex-end'}]}>
             <BoldText style={{fontSize: 20}}>{ isEdit ? ' ' : imt}</BoldText>
          </View>
        </View>

        {!isEdit ? 
        <Pressable style={{alignSelf: 'flex-end'}} onPress={() => setEdit(true)}>
          <EditIcon/>
        </Pressable>
          : 
        <Pressable style={{alignSelf: 'flex-end'}} onPress={() => setEdit(false)}>
          <TickIcon/>
        </Pressable>
        }
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
    position: 'relative',
  },
  header: {
    fontSize: 16,
    color: '#fff'
  },
  field: {
    padding: 10,
    gap: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 5,
    height: 86
    
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})