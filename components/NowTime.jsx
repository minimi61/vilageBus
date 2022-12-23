import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const NowTime = ({ hour, minutes }) => {
    return (
        <Text>현재시간 {hour}:{minutes}</Text>
    )
}

export default NowTime