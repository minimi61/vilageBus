import React from 'react'
import { todayDay } from '../../hooks/todayDay';
import { Text } from 'react-native';

 const Today = () => {
  const date = new Date()
  const thisYear = date.getFullYear();
  const todayMonth = date.getMonth() + 1;
  const todayDate = date.getDate();

  return (
    <Text style={{fontSize:24, fontWeight:'bold'}}>{thisYear}년 {todayMonth}월 {todayDate}일({todayDay})</Text>
  )
}

export default Today;