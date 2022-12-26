import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, deference}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      {deference === 0 ?
        <Text style={styles.text}>출발 또는 곧 출발</Text> :
        <Text>{deference}분 후 출발</Text>}
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