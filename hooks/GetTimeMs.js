import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Bus1Week } from '../data/1bus/weekday'
import { Bus1Sat } from '../data/1bus/saturday'
import { Bus1Sun } from '../data/1bus/sunday'
import { Bus2Week } from '../data/2bus/weekday'
import { Bus2SatAndHoli } from '../data/2bus/saturdayAndHoliday'
import { Bus2Sun } from '../data/2bus/sunday'


export const GetTimeMs = (date, busType) => {
    let scheduleData
    if (date.getDay() >= 1 && date.getDay() <= 5) { busType == 'one' ? scheduleData = Bus1Week : scheduleData = Bus2Week}
    if (date.getDay() === 6) { busType == 'one' ? scheduleData = Bus1Sat : scheduleData = Bus2SatAndHoli}
    if (date.getDay() === 0) { busType == 'one' ? scheduleData = Bus1Sun : scheduleData = Bus2Sun}

    const toMs = (hr, min) => (hr * 60 * 60 + min * 60) * 1000

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
    
    return {nextTime,deferenceValue}
}
