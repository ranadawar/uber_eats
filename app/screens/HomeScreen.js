import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import HeaderTab from "../components/HeaderTab";
import SearchTab from "../components/SearchTab";
import Categories from "../components/Categories";
import CategoryItem from "../components/CategoryItem";
import Listings from "../components/Listings";

const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <HeaderTab />
      <SearchTab />
      <View style={styles.innerContainer}>
        <Categories />
        <Listings />
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  innerContainer: {
    backgroundColor: "#eee",
    flex: 1,
  },
});
