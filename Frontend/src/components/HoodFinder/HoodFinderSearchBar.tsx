import React from "react";
import SearchBarInput from "../inputs/SearchBarInput";
import useSearchBar from "./hooks/useSearchBar";

const HoodFinderSearchBar = () => {
  const { onChange } = useSearchBar();
  return <SearchBarInput onChangeText={onChange} />;
};

export default HoodFinderSearchBar;
