// @ts-nocheck
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RangeSlider from "rn-range-slider";
import colors from "../../utils/colors";

const THUMB_RADIUS_LOW = 12;

const Thumb = () => {
  return <View style={styles.rootCircle} />;
};
const Rail = () => {
  return <View style={styles.root} />;
};

const RailSelected = () => {
  return <View style={styles.root} />;
};

export type RangeInputProps = {
  min: number;
  max: number;
  initialLowValue?: number;
  initialMaxValue?: number;
  onChange: (low: number, high: number) => void;
  disableRange?: boolean;
  label?: string;
  low?: number;
  high?: number;
};

const RangeInput = ({
  min,
  max,
  initialLowValue,
  initialMaxValue,
  onChange,
  disableRange,
  label,
  low,
  high,
}: RangeInputProps) => {
  return (
    <View style={styles.slider}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <RangeSlider
        disableRange={disableRange}
        style={{ width: "100%", height: 40 }}
        gravity={"center"}
        min={min}
        max={max}
        step={1}
        selectionColor="#3df"
        blankColor="#f618"
        onSliderTouchEnd={onChange}
        renderThumb={() => <Thumb />}
        renderRail={() => <Rail />}
        renderRailSelected={() => <RailSelected />}
        initialLowValue={initialLowValue}
        initialHighValue={initialMaxValue}
        low={low}
        high={high}
      />
    </View>
  );
};

export default RangeInput;

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    height: 60,
    marginBottom: 10,
  },
  rootCircle: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: colors.lightTeal,
    backgroundColor: colors.teal,
  },
  root: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.lightTeal,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
});
