import Styled from "@emotion/native";
import { observer } from "mobx-react";
import React from "react";
import { Text } from "react-native";
import colors from "../../utils/colors";
import DropdownInput from "../inputs/DropdownInput";
import RangeInput from "../inputs/RangeInput";
import useFilterForm from "./hooks/useFilterForm";
import { FILTER, SUBMIT } from "../../utils/strings";

const DISTANCE_MAX_VALUE = 100;
const DISTANCE_MIN_VALUE = 0;
const AGE_MAX_VALUE = 120;
const AGE_MIN_VALUE = 1;

const Container = Styled.View({
  padding: 10,
  margin: 10,
  backgroundColor: "white",
  borderRadius: 5,
  shadowColor: "black",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 5,
  alignSelf: "center",
  width: "90%",
});

const SubmitButton = Styled.Text({
  backgroundColor: colors.teal,
  color: "white",
  padding: 10,
  borderRadius: 5,
  textAlign: "center",
  marginTop: 10,
});

const Title = Styled.Text({
  fontSize: 20,
  marginBottom: 10,
  textAlign: "center",
  fontWeight: "500",
});

const HoodFinderFilterModalContent = () => {
  const {
    setFormValuesByKey,
    onSubmit,
    fieldOptions,
    sortOrderOptions,
    formValues,
    initialValues,
  } = useFilterForm();

  return (
    <Container>
      <Title>{FILTER}</Title>
      <RangeInput
        onChange={(low, _high) => setFormValuesByKey("maxDistance", low)}
        max={DISTANCE_MAX_VALUE}
        min={DISTANCE_MIN_VALUE}
        low={formValues.maxDistance}
        disableRange={true}
        label="Max Distance"
      />
      <RangeInput
        onChange={(low, high) => setFormValuesByKey("ageRange", [low, high])}
        max={AGE_MAX_VALUE}
        min={AGE_MIN_VALUE}
        low={initialValues?.ageRange?.[0]}
        high={initialValues?.ageRange?.[1]}
        label="Age Range"
      />
      <DropdownInput
        data={fieldOptions ?? []}
        onChange={(value) => setFormValuesByKey("sortField", value)}
        value={formValues.sortField}
        placeholder="Sort Field"
      />
      <DropdownInput
        data={sortOrderOptions ?? []}
        onChange={(value) => setFormValuesByKey("sortOrder", value)}
        value={formValues.sortOrder}
        placeholder="Sort Order"
      />
      <SubmitButton onPress={onSubmit}>
        <Text>{SUBMIT}</Text>
      </SubmitButton>
    </Container>
  );
};

export default observer(HoodFinderFilterModalContent);
