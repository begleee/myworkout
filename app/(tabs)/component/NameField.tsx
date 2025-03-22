import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import LightText from '../texts/LightText'
import BoldText from '../texts/BoldText'

export default function nameField({userName, setUserName, isEdit}: {userName: string, setUserName: (userName: string) => void, isEdit: boolean}) {
  return (
    <View style={styles.nameForm}>
        <LightText style={{color: '#fff'}}>имя: </LightText>
        {isEdit ? 
        <TextInput
            placeholder='Введите имя'
            placeholderTextColor={'#fff'}
            maxLength={10}
            style={styles.nameInput}
            value={userName}
            onChangeText={userName => setUserName(userName)}
        />
        :
          <BoldText style={styles.userName}>
            {userName ? userName : "Введите имя"}
          </BoldText>
        }
    </View> 
  )
}

const styles = StyleSheet.create({
    nameForm: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: 12,
        height: 30
    },
    nameInput: {
      width: '100%',
      fontSize: 20,
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 6,
      paddingHorizontal: 5,
      paddingVertical: 2,
      color: '#fff'
    },
    userName: {
      fontSize: 20,
      color: '#fff',
      width: '100%',
    }
})