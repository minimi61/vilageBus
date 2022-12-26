import React from 'react'
import { todayDay } from '../hooks/todayDay';
import { Text } from 'react-native';

 const Today = () => {
  const date = new Date()
  const thisYear = date.getFullYear();
  const todayMonth = date.getMonth() + 1;
  const todayDate = date.getDate();

  return (
    <Text>{thisYear}년 {todayMonth}월 {todayDate}일 {todayDay}요일</Text>
  )
}

export default Today;