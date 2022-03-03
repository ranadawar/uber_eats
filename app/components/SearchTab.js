import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Ionicons, AntDesign } from "@expo/vector-icons";
const SearchTab = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={25} />
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
          },
        }}
      />
      <View style={styles.innerContainer}>
        <AntDesign name="clockcircle" size={13} />
        <Text style={{ marginLeft: 5 }}>Search</Text>
      </View>
    </View>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
    paddingHorizontal: 7,
    paddingVertical: 2,
    paddingTop: 4,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
  },
  search: {
    width: "100%",
    marginRight: 25,
    color: "#eee",
  },
  innerContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 9,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
});
