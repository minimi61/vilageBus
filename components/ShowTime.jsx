import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
// import styled from 'styled-components/native'


const ShowTime = ({ time }) => {

  return (
    <View style={styles.showTimeContainer}>
      <Text>{time}</Text>
    </View>
  )
}


export default ShowTime

// const ShowTimeContainer = styled.View`
//     align-items: center;
// `
const styles = StyleSheet.create({
  showTimeContainer: {
    alignItems: 'center',
    // padding: '1rem',
  }
});