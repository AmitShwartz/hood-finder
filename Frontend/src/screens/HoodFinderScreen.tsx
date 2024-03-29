import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HoodCardsList from "../components/HoodFinder/HoodCardsList";
import HoodFinderSearchContainer from "../components/HoodFinder/HoodFinderSearchContainer";
import useFetchNeighborhoods from "../hooks/server/useFetchNeighborhoods";

const HoodFinderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Hoods</Text>
      <Text style={styles.title1}>Finder</Text>
      <HoodFinderSearchContainer />
      <HoodCardsList />
    </View>
  );
};

export default HoodFinderScreen;

const styles = StyleSheet.create({
  title1: {
    fontSize: 24,
    fontWeight: "500",
  },
  title2: {
    fontSize: 16,
    fontWeight: "400",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
});
