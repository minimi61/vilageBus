import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './time-container/BusStatus';
import NowTime from '../common/NowTime';
import Today from '../common/Today';
import GetTimeMs from '../../hooks/getTimeMs'
import { isHoliday } from '../../hooks/copyCalendar';
// import { setLunarToSolar } from '../hooks/holidayCalculate';
import {color} from '../../assets/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Main = () => {
  const date = new Date();
  const [nowData, setNowData] = useState(date)
  // console.log(setLunarToSolar())
  // isHoliday(2023,1,1,2,1)
  const newDateTime = () => {
    //////test용 1초 setInterval 중지 
    const date = new Date();
    setNowData(date)
    return 
  }
  useEffect(() => {
    // setInterval(newDateTime, 1000)
  }, [])
  return (
  <View style={{flex: 1}}>
    <View style={styles.header}>   
      {/* <Text>마을버스 시간표</Text> */}
      <View style={{flex:1, justifyContent:'flex-end'}}>
        <Today />
      </View>
       
      </View>
      <View style={{flex:0.6, display:'flex',flexDirection:'row'}}>
        <View style={{ width: '50%', backgroundColor: '#ffd24c' }}>
          <View>
            <Text style={{ textAlign: 'center' }}>1번</Text>
            <Text style={{ textAlign: 'center' }}>종점 > 과천역</Text>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />            
          </View>

          </View>
          <View style={{width:'50%',backgroundColor: '#fdda7985'}}></View>
      </View>
      <View style={styles.body}>
      <NowTime hour={nowData.getHours()} minutes={nowData.getMinutes()} />
      <GetTimeMs date={nowData}/>
      <StatusBar style="auto" />
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: color.MainYellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3.5,
    backgroundColor: color.MainWhite,
  }
});
export default Main