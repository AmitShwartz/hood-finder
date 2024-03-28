import React from "react";
import { StyleSheet, View } from "react-native";
// @ts-ignore
import RangeSlider from "react-native-range-slider";

type Props = {
  minValue: number;
  maxValue: number;
  selectedMinimum: number;
  selectedMaximum: number;
  disableRange: boolean;
  onChange: (data: any) => void;
};

const RangeInput = ({
  minValue,
  maxValue,
  selectedMinimum,
  selectedMaximum,
  disableRange,
  onChange,
}: Props) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <RangeSlider
        disableRange={disableRange}
        minValue={minValue}
        maxValue={maxValue}
        tintColor={"#da0f22"}
        handleBorderWidth={1}
        handleBorderColor="#454d55"
        selectedMinimum={selectedMinimum}
        selectedMaximum={selectedMaximum}
        style={{ flex: 1, height: 70, padding: 10, backgroundColor: "#ddd" }}
        onChange={onChange}
      />
    </View>
  );
};

export default RangeInput;

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    height: 80,
  },
});
