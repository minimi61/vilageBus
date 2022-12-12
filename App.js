import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import data from './data/1bus/weekday.json'

export default function App() {
  const time = Date.now()
  // const rr = new Date()
  const dd = new Date(data[1][2].split(':'))
  const aa = data[1][2].split(':')
  // console.log(dd.getMinutes())
  console.log(Number(aa[0]))

 
  {data.map((x, idx) => console.log(data[1][2]) ) }
  return (
    <View style={styles.container}>   
      <Text>블라</Text>
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