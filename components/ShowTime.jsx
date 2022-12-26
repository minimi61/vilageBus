import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const ShowTime = ({ time }) => {

  return (
    <View style={styles.showTimeContainer}>
      <Text>{time}</Text>
    </View>
  )
}


export default ShowTime

const styles = StyleSheet.create({
  showTimeContainer: {
    alignItems: 'center',
  }
});