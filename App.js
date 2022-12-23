import React,{useState,useEffect} from 'react';{}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import NowTime from './components/NowTime';
import { Today } from './components/Today';
import { GetTimeMs } from './hooks/GetTimeMs';
import { nowTime } from './hooks/todayDay';


export default function App() {
  // const time = Date.now()
  // let date = new Date()
  const date = new Date();
  const [nowData, setNowData] = useState(date)
  const nowTime = () => {
    const date = new Date();
    setNowData(date)
    return 
  }
  useEffect(() => {
    setInterval(nowTime, 1000)
  },[])

  return (
    <View style={styles.container}>   
      <Text>마을버스 시간표</Text>
      <Today />
      <NowTime hour={nowData.getHours()} minutes={nowData.getMinutes()} />
      <GetTimeMs date={nowData} />
      <StatusBar style="auto" />
      {/* <Button/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//https://stackoverflow.com/questions/15191184/converting-string-time-into-milliseconds