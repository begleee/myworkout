import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import BoldText from '../texts/BoldText'
import LightText from '../texts/LightText'
import RegularText from '../texts/RegularText'

export default function Field({param, isEdit, val, setVal, measure}: {param: string, isEdit: boolean, val: number, setVal: (val: number) => void, measure: string}) {
  return (
    <View style={styles.field}>
        <BoldText style={{fontSize: 20}}>{param}</BoldText>
        <View style={styles.infoField}>
            <LightText style={{fontSize: 16, width: '50%'}}>текущий</LightText>
            {isEdit ?
                <TextInput maxLength={3} value={String(val)} keyboardType='numeric' onChangeText={val => setVal(Number(val))} style={styles.valInput}/>
                :
                <RegularText style={styles.val}>{val} {measure}</RegularText>
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    field: {
        padding: 10,
        gap: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 5,
        height: 86
    },
    infoField: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valInput: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderWidth: 1,
        borderRadius: 6,
        width: 50,
        fontSize: 20,
    },
    val: {
        fontSize: 20,
        width: '50%',
        textAlign: 'right'
    }
})