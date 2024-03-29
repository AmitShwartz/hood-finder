import React from "react";
import Styled from "@emotion/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInputProps } from "react-native";

const Container = Styled.View({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 10,
  margin: 10,
  backgroundColor: "white",
  borderRadius: 5,
  shadowColor: "black",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 5,
  flex: 1,
});

const TextInput = Styled.TextInput({
  fontSize: 16,
  marginLeft: 10,
  flex: 1,
});

const SearchBarInput = (props: TextInputProps) => {
  return (
    <Container>
      <Ionicons name="search" size={24} color="black" />
      <TextInput placeholder="Search" {...props} />
    </Container>
  );
};

export default SearchBarInput;
