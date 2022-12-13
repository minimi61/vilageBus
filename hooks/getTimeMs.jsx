import React, { useState } from 'react'
import data from '../data/1bus/weekday.json'

export const GetTimeMs = () => {
    const [scheduleTime, setScheduleTime] = useState()
    const date = new Date()
    const toMs = (hr, min) => (hr * 60 * 60 + min * 60) * 1000
    console.log('현재시간:', toMs(date.getHours(), date.getMinutes()))
    const nowTime = toMs(date.getHours(), date.getMinutes())
    const aa = data[1][2].split(':')
    const dateTime = toMs(Number(aa[0]), Number(aa[1]))

    console.log(dateTime, nowTime)

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
    return (
        <div>날짜 나옵니다</div>
    )
}