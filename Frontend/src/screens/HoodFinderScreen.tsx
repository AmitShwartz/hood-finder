import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HoodCardsList from "../components/HoodFinder/HoodCardsList";
import SearchBarInput from "../components/inputs/SearchBarInput";
import useFetchNeighborhoods from "../hooks/server/useFetchNeighborhoods";

type Props = {};

const HoodFinderScreen = (props: Props) => {
  const { data, error } = useFetchNeighborhoods({
    searchTerm: "",
    ageRange: [0, 100],
    maxDistance: 100,
    sortBy: ["neighborhood", "ASC"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finder</Text>
      <SearchBarInput />
      {!!data && <HoodCardsList neighborhoods={data} />}
    </View>
  );
};

export default HoodFinderScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  container: {
    flex: 1,

    paddingHorizontal: 20,
    paddingVertical: 60,
  },
});
