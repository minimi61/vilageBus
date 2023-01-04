import React from "react";
import { useState } from "react";
// import { Dimensions } from 'react-native';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, deference,nowTime,nextTime }) => {
  // const chartHeight = Dimensions.get('window').height;
  // const chartWidth = Dimensions.get('window')
  // console.log(nowTime.getHours() < 5)
  // nowTime.getHours() < 5 ? setFirstTime(true) : setFirstTime(false) 
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      {nowTime.getHours() < 5 ? <Text>05:20 첫차</Text> : 
      deference === 0 ?
        <Text style={styles.text}>출발 또는 곧 출발</Text> :
        <Text Text > {deference}분 후 출발</Text>
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

export default Button;