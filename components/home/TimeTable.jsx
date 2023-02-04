import React from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { Bus1Week } from '../../data/1bus/weekday'
import { Bus1Sat } from '../../data/1bus/saturday'
import { Bus1Sun } from '../../data/1bus/sunday'
import { Bus2Week } from '../../data/2bus/weekday'
import { Bus2SatAndHoli } from '../../data/2bus/saturdayAndHoliday'
import { Bus2Sun } from '../../data/2bus/sunday'
import ShowTimeTable from '../common/ShowTimeTable'
import { color } from '../../assets/colors'
///////////api주소 확인 후 다시 하기
// import { getHoliyday } from '../../hooks/getHolidayAPI'

const TimeTable = ({ date }) => {
  ////공공 qpi
  // const aa = getHoliyday()
  // console.log(aa)
  let busData;
  switch (date) {
    case '1번평일': busData = Bus1Week;
    case '1번토요일': busData = Bus1Sat;
    case '1번일요일': busData = Bus1Sun;
    case '1번공휴일': busData = Bus1Sun;

    case '2번평일': busData = Bus2Week;
    case '2번토요일': busData = Bus2SatAndHoli;
    case '2번일요일': busData = Bus2Sun;
    case '2번공휴일': busData = Bus2SatAndHoli;


  }
  return (
    <View>
      <View style={{ height: '8%', flexDirection: 'row', backgroundColor: color.MainYellow }}>
        <Text style={{
          width: '100%', textAlign: 'center', fontSize: 30,
        }}>평일 시간표</Text>
      </View>

      <ScrollView
        style={[styles.commingContainer, { width: '70%', height: '100%', marginTop: 30 }]}>
        {Bus1Week.map((time, idx) => {
          return <ShowTimeTable time={time} key={idx} />
        })}
      </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
  commingContainer: {
    width: 80,
    maxHeight: 500,
    marginLeft: '15%',
    backgroundColor: '#eff0ec',
    borderWidth: 0.5,
    borderColor: '#494a4a'
  }
});
export default TimeTable