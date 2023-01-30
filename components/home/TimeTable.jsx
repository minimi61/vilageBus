import React from 'react'
import { View,ScrollView,StyleSheet,Text } from 'react-native'
import { Bus1Week } from '../../data/1bus/weekday'
import { Bus1Sat } from '../../data/1bus/saturday'
import { Bus1Sun } from '../../data/1bus/sunday'
import { Bus2Week } from '../../data/2bus/weekday'
import { Bus2SatAndHoli } from '../../data/2bus/saturdayAndHoliday'
import { Bus2Sun } from '../../data/2bus/sunday'
import ShowTimeTable from '../common/ShowTimeTable'
import { color } from '../../assets/colors'
import { getHoliydayAPI } from '../../hooks/getHolidayAPI'

const TimeTable = () => {
  ////공공 qpi
  // const aa = getHoliydayAPI()

  return (
    <View>
      <View style={{ height:'8%',flexDirection: 'row', backgroundColor:color.MainYellow }}>
        <Text style={{width:'100%', textAlign:'center',    fontSize: 30,
 }}>평일 시간표</Text>
      </View>

      <ScrollView 
      style={[styles.commingContainer, { width: '70%',height:'100%', marginTop: 30 }]}>
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
    marginLeft: 50,
    backgroundColor: '#eff0ec',
    borderWidth: 0.5,
    borderColor: '#494a4a'
  }
});
export default TimeTable