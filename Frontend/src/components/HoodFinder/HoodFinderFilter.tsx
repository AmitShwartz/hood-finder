import Styled from "@emotion/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import useFormStore from "../../hooks/server/stores/useFormStore";
import colors from "../../utils/colors";
import HoodFinderFilterModal from "./HoodFinderFilterModal";
import { observer } from "mobx-react";

const FilterButton = Styled.TouchableOpacity({
  height: 42,
  width: 42,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.teal,
  marginLeft: 8,
  borderRadius: 5,
});

const HoodFinderFilter = () => {
  const { showModal } = useFormStore();

  return (
    <>
      <FilterButton onPress={showModal}>
        <Ionicons name="options-outline" size={24} color="white" />
      </FilterButton>
      <HoodFinderFilterModal />
    </>
  );
};

export default observer(HoodFinderFilter);
