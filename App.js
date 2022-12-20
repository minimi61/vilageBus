import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { Today } from './components/Today';
import { GetTimeMs } from './hooks/GetTimeMs';

export default function App() {
  const time = Date.now()



  return (
    <View style={styles.container}>   
      <Text>마을버스 시간표</Text>
      <Today/>
      <GetTimeMs/>
      <StatusBar style="auto" />
      <Button/>
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