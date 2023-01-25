import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const NowTime = ({ hour, minutes }) => {
    return (
        <Text>현재시간 {String(hour).length == 1 ? String(hour).padStart(2, '0') : hour}
            :{String(minutes).length == 1 ? String(minutes).padStart(2, '0') : minutes}</Text>
    )
}

export default NowTime