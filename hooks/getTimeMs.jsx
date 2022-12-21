import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import styled from 'styled-components/native'
import Bus1Week from '../data/1bus/weekday.json'
import Bus1Sat from '../data/1bus/saturday.json'
import Bus1Sun from '../data/1bus/sunday.json'
import ShowTime from '../components/ShowTime';


export const GetTimeMs = () => {
    const date = new Date()
    const [scheduleTime, setScheduleTime] = useState()
    
    let scheduleData

    if (date.getDay() >= 1 && date.getDay() <= 5) { scheduleData = Bus1Week }
    if (date.getDay() === 6) { scheduleData = Bus1Sat }
    if (date.getDay() === 0) { scheduleData = Bus1Sun}
        
    const toMs = (hr, min) => (hr * 60 * 60 + min * 60) * 1000
    console.log('현재시간:', toMs(date.getHours(), date.getMinutes()))
    
    const nowTime = toMs(date.getHours(), date.getMinutes())
    let nextTime = []
    // setInterval(nowTime, 1000)
    for (let i = 0; i < scheduleData.length; i++) {
        let splitData = scheduleData[i].split(':')
        if (toMs(Number(splitData[0]), Number(splitData[1])) >= nowTime) {
            // nearTime.push(scheduleData[i+1])
            // break;
            nextTime.push(scheduleData[i])
        }
    }
    let commingTime = nextTime.slice(1)

    return (
        <View>
            <View style={styles.container}>
                <Text>{nextTime[0]}</Text>
            </View>

            <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.commingContainer}>
                {commingTime.map((time, idx) => {
                    return <ShowTime time={time} key={idx}  />
                })}
            </ScrollView>
        </View>
    )
}
// const NextContainer = styled.View`
//    align-items: center;
//    padding: 1rem;

// `
// const CommingContainer = styled.ScrollView`
//     width: 300px;
//     height: 300px;
//     background-color: lightblue;
// `
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: '1rem',
    },
    commingContainer: {
        width: '300px',
        height: '300px',
        backgroundColor: 'lightblue',
    }
  });