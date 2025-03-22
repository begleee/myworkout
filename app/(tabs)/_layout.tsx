import React, { useState } from 'react'
import { Tabs, TabSlot, TabTrigger, TabList} from 'expo-router/ui'
import { StyleSheet, View, Text } from 'react-native'
import UserIcon from "./icons/UserIcon"
import StatsIcon from "./icons/StatsIcon"
import WorkoutIcon from './icons/WorkoutIcon'
import CalendarIcon from './icons/CalendarIcon'

export default function RootLayout() {

    const [activeTab, setActiveTab] = useState('index')
    return (
        <Tabs>  
            <TabSlot/>
            <TabList style={styles.nav}>
                <TabTrigger name='calendar' href={'/calendarpage'} style={[styles.navlink, activeTab === 
                    'calendarpage' && styles.activeNavlink]} onPress={() => setActiveTab('calendarpage')}>
                    <CalendarIcon/>
                </TabTrigger>

                <TabTrigger name='workout' href={'/workout'} style={[styles.navlink, activeTab === 'workout' && styles.activeNavlink]} onPress={() => setActiveTab('workout')}>
                    <WorkoutIcon/>
                </TabTrigger>

                <TabTrigger name='stats' href={'/stats'} style={[styles.navlink, activeTab === 'stats' && styles.activeNavlink]} onPress={() => setActiveTab('stats')}>
                    <StatsIcon/>
                </TabTrigger>

                <TabTrigger name='index' href={'/'} style={[styles.navlink, activeTab === 'index' && styles.activeNavlink]} onPress={() => setActiveTab('index')}>
                    <UserIcon/>
                </TabTrigger>

            </TabList>
        </Tabs>
    )
}

const styles = StyleSheet.create({
    nav: {
        paddingHorizontal: 32,
        paddingVertical: 11,
        backgroundColor: '#fff'
    },
    navlink: {
        padding: 10,
        alignSelf: 'center',
    },
    activeNavlink: {
        borderBottomColor: '#5C00FF', 
        borderBottomWidth: 2,
        borderRadius: 5,
    }
})