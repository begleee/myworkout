import { View, StyleSheet } from 'react-native'
import BoldText from './texts/BoldText'
import DateField from './component/DateField'

export default function Stats() {
  return (
    <View style={styles.container}>
      <BoldText style={styles.header}>Статистика</BoldText>
      <DateField theme={false}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4EFFD',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 16,
    gap: 16,
    overflow: 'hidden'
  },
  header: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center'
  }
})