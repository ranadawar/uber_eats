import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: 1,
    title: "Pick-Up",
    image: require("../assets/images/shopping-bag.png"),
  },
  {
    id: 2,
    title: "Soft Drinks",
    image: require("../assets/images/soft-drink.png"),
  },
  {
    id: 3,
    title: "Bakery Items",
    image: require("../assets/images/bread.png"),
  },
  {
    id: 4,
    title: "Fast Food",
    image: require("../assets/images/fast-food.png"),
  },
  {
    id: 5,
    title: "Deals",
    image: require("../assets/images/deals.png"),
  },
  {
    id: 6,
    title: "Coffee & Tea",
    image: require("../assets/images/coffee.png"),
  },
  {
    id: 7,
    title: "Desserts",
    image: require("../assets/images/desserts.png"),
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryItem title={item.title} imageUri={item.image} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 10,
  },
});
