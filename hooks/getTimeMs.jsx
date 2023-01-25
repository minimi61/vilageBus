import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Bus1Week } from '../data/1bus/weekday'
import { Bus1Sat } from '../data/1bus/saturday'
import { Bus1Sun } from '../data/1bus/sunday'
import { Bus2Week } from '../data/2bus/weekday'
import { Bus2SatAndHoli } from '../data/2bus/saturdayAndHoliday'
import { Bus2Sun } from '../data/2bus/sunday'
import ShowTime from '../components/common/ShowTime';
import Button from '../components/home/time-container/BusStatus';

const GetTimeMs = ({ date }) => {
    let scheduleData

    if (date.getDay() >= 1 && date.getDay() <= 5) { scheduleData = Bus1Week }
    if (date.getDay() === 6) { scheduleData = Bus1Sat }
    if (date.getDay() === 0) { scheduleData = Bus1Sun }

    const toMs = (hr, min) => (hr * 60 * 60 + min * 60) * 1000
    // console.log('현재시간:', toMs(date.getHours(), date.getMinutes()))
    // console.log(Bus1Week)
    const nowTime = toMs(date.getHours(), date.getMinutes())
    let nextTime = []
    let deferenceValue = []
    for (let i = 0; i < scheduleData.length; i++) {
        let splitData = scheduleData[i].split(':')
        if (toMs(Number(splitData[0]), Number(splitData[1])) >= nowTime) {
            nextTime.push(scheduleData[i])
            deferenceValue.push(toMs(Number(splitData[0]), Number(splitData[1])) - nowTime)
        }
    }
    let commingTime = nextTime.slice(1)

    return (
        <View>
            {nextTime.length > 0 ?
                <View style={styles.container}>
                    <Text>버스 출발시간 : {nextTime[0]}</Text>
                </View>
                : <View style={styles.container}>
                    <Text>없음</Text>
                </View>
            }
            <Button nowTime={date} nextTime={nextTime[0]} deference={deferenceValue[0] / 60000} commingTime={commingTime} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                style={styles.commingContainer}>
                {commingTime.map((time, idx) => {
                    return <ShowTime time={time} key={idx} />
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 1,
    },
    commingContainer: {
        width: 80,
        maxHeight: 200,
        backgroundColor: 'lightblue',
    }
});

export default GetTimeMs;