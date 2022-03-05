import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({ imageUri, onPress, title, subtitle, rating }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subtitle}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 22,
    overflow: "hidden",
    elevation:10,
  },
  icon: {
    position: "absolute",
    right: 40,
    top: 25,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  innerContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
  ratingContainer: {
    backgroundColor: "#eee",
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 9,
    marginRight: 10,
  },
});
