import Styled from "@emotion/native";
import React from "react";
import HoodCard from "./HoodCard";
import useFetchNeighborhoodsOnChange from "./hooks/useFetchNeighborhoodsOnChange";
import { observer } from "mobx-react";
import useFormStore from "../../hooks/stores/useFormStore";
import { LOADING, NO_NEIGHBORHOODS } from "../../utils/strings";

const Container = Styled.ScrollView({
  padding: 6,
});

const Text = Styled.Text({
  textAlign: "center",
  marginTop: 12,
});

const HoodCardsList = () => {
  const { neighborhoods, isLoading } = useFetchNeighborhoodsOnChange();
  const { searchTerm } = useFormStore();
  return (
    <Container>
      {isLoading && <Text>{LOADING}</Text>}
      {!!neighborhoods?.length &&
        neighborhoods.map((neighborhood, index) => (
          <HoodCard key={index} {...neighborhood} />
        ))}
      {!isLoading &&
        !neighborhoods?.length &&
        (searchTerm?.length ?? 0) > 2 && <Text>{NO_NEIGHBORHOODS}</Text>}
    </Container>
  );
};

export default observer(HoodCardsList);
