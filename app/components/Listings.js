import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const YELP_KEY =
  "kyonwOPVfWMeCeAAWnNexbO_Ww8gkP7NtjuBTQr6_dUO5bOfERVbfUz6p5qEr7rpXt8Z5ZWty5CmlUq0v9tCk_Fp87pK6GpqVctMcLmMFdqCdLsmZjqYdGA0T0EjYnYx";

const Listings = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => getResturantsFromYelp(), []);

  const getResturantsFromYelp = () => {
    const yelUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=New York";
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_KEY}`,
      },
    };
    return fetch(yelUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setListings(json.businesses));
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        renderItem={({ item }) => (
          <Card
            imageUri={item.image_url}
            title={item.name}
            subtitle={item.alias}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({});
