import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../../../components/Home/SearchBar.js";
import CustomCarousel from "../../../components/Home/CustomCarousel.js";
import Category from "../../../components/Home/Category.js";
import AdsPromotion from "../../../components/Home/AdsPromotion.js";
import Popular from "../../../components/Home/Popular.js";

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
});

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* Search Bar */}
        <SearchBar></SearchBar>
        {/* Carousel Component */}
        <CustomCarousel></CustomCarousel>
        {/* Category Component */}
        <Category />
        {/* Promotion Component */}
        <AdsPromotion />
        {/* PopularComponent */}
        <Popular />
      </View>
      <View style={{ marginTop: "20%" }} />
    </ScrollView>
  );
}

export default HomeScreen;
