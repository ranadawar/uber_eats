import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HeaderTab = () => {
  const [dClick, setDclick] = useState(true);
  const [pClick, setPclick] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setDclick(true);
          setPclick(false);
        }}
        style={dClick ? styles.clicked : styles.notClicked}
      >
        <Text style={dClick ? styles.clickedText : styles.notClickedText}>
          Delivery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setDclick(false);
          setPclick(true);
        }}
        style={pClick ? styles.clicked : styles.notClicked}
      >
        <Text style={pClick ? styles.clickedText : styles.notClickedText}>
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "70%",
    alignSelf: "center",
    borderRadius: 25,
  },
  clicked: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#000",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 18,
  },
  notClicked: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#eee",
    paddingVertical: 7,
    borderRadius: 18,
    paddingHorizontal: 15,
  },
  clickedText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  notClickedText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
});
