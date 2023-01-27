import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const BusTimeSchedule = () => {
  return (
   <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {commingTime.map((time, idx) => {
        return <ShowTime time={time} key={idx}  />
      })}
  </ScrollView>
  )
}

export default BusTimeSchedule