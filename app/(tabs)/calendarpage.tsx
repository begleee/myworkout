import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars'
import BoldText from './texts/BoldText';
import DateField from './component/DateField';

LocaleConfig.locales['rus'] = {
  monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
  ],
  monthNamesShort: ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'],
  dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  today: "Сегодня"
};
LocaleConfig.defaultLocale = 'rus';

export default function calendarPage() {
  const today = new Date().toISOString().split('T')[0];

  const renderDay = (day: any, state: any) => {
    const isToday = day.dateString === today;
    return (
      <View style={[styles.dayContainer, isToday && styles.todayContainer]}>
        <Text style={[styles.dayText, isToday && styles.todayText, state === 'disabled' && styles.disabledText]}>
          {day.day}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BoldText style={styles.header}>Календарь</BoldText>
      <View style={{paddingHorizontal: 22, width: '100%'}}>
        <DateField theme={false}/>
      </View>
      <CalendarList
      style={styles.calendar}
      scrollEnabled={true}
      showScrollIndicator={true}
      pastScrollRange={12}
      futureScrollRange={12}
      horizontal={false}
      dayComponent={({ date, state }) => renderDay(date, state)}
      monthFormat='MMMM yyг.'
      calendarHeight={308}
      theme={{
        calendarBackground: '#F4EFFD',
        todayTextColor: '#fff',
        textDayFontFamily: 'Inter-regular',
        textMonthFontFamily: 'Inter-regular',
        textDayHeaderFontFamily: 'Inter-regular',
        textMonthFontSize: 12,
        textDayFontSize: 16,
        textDayHeaderFontSize: 12,
        todayBackgroundColor: '#5C00FF',
        monthTextColor: '#5C00FF'
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EFFD',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
    overflowX: 'hidden'
  },
  calendar: {
    height: 648,
    transform: 'translateX: '
  },
  header: {
    fontSize: 16,
    color: '#000',
    width: '100%',
    textAlign: 'center'
  },
  dayContainer: {
    width: 24,
    height: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayContainer: {
    backgroundColor: '#5C00FF',
    color: '#fff'
  },
  dayText: {
    fontSize: 16,
    color: '#B3B3B3'
  },
  todayText: {
    color: '#fff'
  },
  disabledText: {
    color: '#fff',
  },
  monthHeader: {
    backgroundColor: '#5C00FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',
  },
  monthHeaderText: {
    color: '#fff',
    fontSize: 16,
  },
})