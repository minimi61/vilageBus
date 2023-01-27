import React from "react";
import { useState } from "react";
// import { Dimensions } from 'react-native';
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../../assets/colors";

const BusStatus = ({ deference,nowTime,commingTime }) => {
  // const chartHeight = Dimensions.get('window').height;
  // const chartWidth = Dimensions.get('window')
  return (
    <View style={{ width: '70%', }}>
      {/* <View style={[styles.container]}> */}
        <View style={[{ backgroundColor: color.MainGreen}]}>
          {nowTime.getHours() < 5 && <Text style={[styles.textCommon]}>05:20 첫차</Text>}
        </View>
          {commingTime.length === 0 && <Text style={[styles.textCommon]}>버스 운행 종료</Text>}
          {nowTime.getHours() > 5 && commingTime.length>0 ? deference === 0?
          <View style={[{ backgroundColor: color.MainGreen}]}>  
            <Text style={[styles.text, styles.textCommon]}>출발 또는 곧 출발</Text>
          </View>
          :
          <View style={[{ backgroundColor: color.MainGreen }]}>
            <Text style={[styles.text, styles.textCommon]}> {deference}분 후 출발</Text>
          </View>
            : null
            }
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textCommon: {
    color: "#fff",
    fontSize: 27,
    fontWeight: '600',
    textAlign:'center'
  }
});

export default BusStatus;