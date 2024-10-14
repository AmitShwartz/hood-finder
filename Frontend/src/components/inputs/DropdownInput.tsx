import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../../utils/colors";
import { SEARCH } from "../../utils/strings";

type Props = {
  data: { label: string; value: string }[];
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
};

const DropdownInput = ({ data, onChange, value, placeholder }: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = useCallback(() => {
    if (!value && !isFocus) return null;

    return (
      <Text style={[styles.label, isFocus && { color: colors.teal }]}>
        {placeholder}
      </Text>
    );
  }, [value, isFocus]);

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: colors.teal }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder={SEARCH}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? colors.teal : colors.black}
            name="check"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 18,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
