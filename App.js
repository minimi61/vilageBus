import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import data from './data/1bus/weekday.json'

export default function App() {
  const time = Date.now()
  const dd = new Date(data[1][2].split(':'))
  console.log(dd.getMinutes())

 
  //{data.map((x, idx) =>       console.log(x) ) }
  return (
    <View style={styles.container}>   
     
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
