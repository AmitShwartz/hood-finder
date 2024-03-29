import Styled from "@emotion/native";
import React from "react";
import SearchBarInput from "../inputs/SearchBarInput";
import HoodFinderFilter from "./HoodFinderFilter";
import HoodFinderSearchBar from "./HoodFinderSearchBar";

const Row = Styled.View({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const HoodFinderSearchContainer = () => {
  return (
    <Row>
      <HoodFinderSearchBar />
      <HoodFinderFilter />
    </Row>
  );
};

export default HoodFinderSearchContainer;
