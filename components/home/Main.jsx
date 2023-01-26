import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Button from './time-container/BusStatus';
import NowTime from '../common/NowTime';
import Today from '../common/Today';
import GetTimeMs from '../../hooks/getTimeMs'
import { isHoliday } from '../../hooks/copyCalendar';
// import { setLunarToSolar } from '../hooks/holidayCalculate';
import {color} from '../../assets/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import BusStatus from './time-container/BusStatus';

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
      <View style={{flex:1, justifyContent:'flex-end',marginBottom:30}}>
        <Today />
      </View>
       
    </View>
    <View style={{flex:0.6,flexDirection:'row'}}>
      <TouchableOpacity style={[styles.centerAlign ,{flex:1,backgroundColor: '#ffd24c' }]}>
          <Text style={{textAlign: 'center',fontSize:18, fontWeight:'600',margin:5 }}>1번</Text>
          <View style={[styles.centerAlign, { flexDirection: 'row' }]}>
            <Text style={styles.startText}>종점</Text>
            <FontAwesomeIcon icon={faArrowRight} style={styles.text}/>
            <Text s={styles.startText}>과천역</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.centerAlign ,{flex:1,backgroundColor: '#fdda7985' }]}>
          <Text style={{textAlign: 'center',fontSize:18, fontWeight:'600',margin:5 }}>2번</Text>
          <View style={[styles.centerAlign, { flexDirection: 'row' }]}>
            <Text style={styles.startText}>종점</Text>
            <FontAwesomeIcon icon={faArrowRight} style={styles.text}/>
            <Text>정부과천청사역</Text>  
          </View>
      </TouchableOpacity>
      </View>
      

      <View style={[styles.body,styles.centerAlign]}>
        <View style={{ width: '70%', height: '20%', flexDirection:'row' }}>
          <View style={[styles.centerAlign, { flex: 1, backgroundColor: '#64cba2' }]}>
            <Text>현재 시간</Text>
            <NowTime hour={nowData.getHours()} minutes={nowData.getMinutes()} />
          </View>
          <View style={[styles.centerAlign, { flex: 1, backgroundColor: '#64cba2' }]}>
            <Text>버스 출발 시간</Text>
            <GetTimeMs date={nowData}/>
          </View>
        </View>
        <View style={{ width: '70%', height: '20%', backgroundColor: color.MainGreen }}>
          {/* <BusStatus/> */}
        </View>
        
      {/* <StatusBar style="auto" /> */}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    backgroundColor: color.MainYellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3.5,
    backgroundColor: color.MainWhite,
  },
  startText: {
    fontSize: 15,
    marginRight: 10
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Main