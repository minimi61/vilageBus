import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import Button from './time-container/BusStatus';
import NowTime from '../common/NowTime';
import Today from '../common/Today';
import {GetTimeMs} from '../../hooks/GetTimeMs';
import { isHoliday } from '../../hooks/copyCalendar';
// import { setLunarToSolar } from '../hooks/holidayCalculate';
import {color} from '../../assets/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import BusStatus from './time-container/BusStatus';
import ShowTime from '../common/ShowTime';

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
  const {nextTime,deferenceValue} = GetTimeMs(nowData)
  let commingTime = nextTime?.slice(1)

  useEffect(() => {
    setInterval(newDateTime, 1000)
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
        <View style={{ width: '70%', height: '15%', flexDirection:'row', marginTop: -60 }}>
          <View style={[styles.centerAlign, { flex: 1, backgroundColor: '#26C886' }]}>
            <Text style={[styles.timeText,{color: 'white'}]}>현재 시간</Text>
            <NowTime hour={nowData.getHours()} minutes={nowData.getMinutes()} />
          </View>
          <View style={[styles.centerAlign, { flex: 1, backgroundColor: '#26C886' }]}>
            <Text style={[styles.timeText,{color: 'white'}]}>버스 출발 시간</Text>
            {/* <GetTimeMs date={nowData}/> */}
            <View>
            {nextTime.length > 0 ?
                <View style={styles.container}>
                    <Text style={{marginTop: 8,color: color.DeepOrange,fontSize: 15,fontWeight: '700',  letterSpacing: 3}}>{nextTime[0]}</Text>
                </View>
                : <View style={styles.container}>
                    <Text>없음</Text>
                </View>
            }
            </View>
          </View>
        </View>
        <BusStatus nowTime={date} deference={deferenceValue[0] / 60000} commingTime={commingTime} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                style={[styles.commingContainer,{width: '70%',marginTop:30}]}>
                {nextTime.map((time, idx) => {
                  return <ShowTime nowTime={date} time={time} key={idx} soonTime={nextTime[0]} />
                })}
        </ScrollView>
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
  },
  commingContainer: {
    width: 80,
    maxHeight: 200,
    backgroundColor: '#eff0ec',
    borderWidth: 0.5,
    borderColor: '#494a4a'
  },
  timeText: {
    fontSize: 15,
    fontWeight: '600'
  }
});
export default Main