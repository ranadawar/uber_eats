import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CategoryItem = ({ onPress, title, imageUri }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={imageUri} style={styles.image} />
        <AppText>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
};
export const AppText = ({ children }) => (
  <Text style={styles.text}>{children}</Text>
);

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    margin: 6,
    alignItems: "center",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 15,
    fontWeight: "700",
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    borderRadius: 35,
  },
});
