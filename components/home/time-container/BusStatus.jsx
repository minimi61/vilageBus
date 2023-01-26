import React from "react";
import { useState } from "react";
// import { Dimensions } from 'react-native';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BusStatus = ({ onPress, deference,nowTime,nextTime,commingTime }) => {
  // const chartHeight = Dimensions.get('window').height;
  // const chartWidth = Dimensions.get('window')
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      {nowTime.getHours() < 5 && <Text>05:20 첫차</Text>}
      {commingTime.length === 0 && <Text>버스 운행 종료</Text>}
      { nowTime.getHours() > 5 && commingTime.length>0 ? deference === 0?
        <Text style={styles.text}>출발 또는 곧 출발</Text> :
        <Text Text > {deference}분 후 출발</Text>
        : null
      }
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 60,
    backgroundColor: "#a7c46c",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  }
});

export default BusStatus;