import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../../assets/colors';


const ShowTimeTable = ({ time, soonTime }) => {

  return (
    <View>
      {
        soonTime == time ?
          <Text style={[styles.showTimeContainer, { color: color.DeepOrange }]}>{time}</Text>
          :
          <Text style={[styles.showTimeContainer, { color: 'black' }]}>{time}</Text>
      }
    </View>
  )
}


export default ShowTimeTable

const styles = StyleSheet.create({
  showTimeContainer: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderColor: '#494a4a'
  }
});