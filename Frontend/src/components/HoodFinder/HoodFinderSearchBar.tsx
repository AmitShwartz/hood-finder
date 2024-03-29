import React from "react";
import SearchBarInput from "../inputs/SearchBarInput";
import useSearchBar from "./hooks/useSearchBar";
import { observer } from "mobx-react";

const HoodFinderSearchBar = () => {
  const { onChange } = useSearchBar();
  return <SearchBarInput onChangeText={onChange} />;
};

export default observer(HoodFinderSearchBar);
