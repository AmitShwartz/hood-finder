import Styled from "@emotion/native";
import React from "react";
import { Neighborhood } from "../../types";
import HoodCard from "./HoodCard";

const Container = Styled.ScrollView({
  padding: 6,
});

type Props = {
  neighborhoods: Neighborhood[];
};

const HoodCardsList = ({ neighborhoods }: Props) => {
  return (
    <Container>
      {neighborhoods.map((neighborhood, index) => (
        <HoodCard key={index} {...neighborhood} />
      ))}
    </Container>
  );
};

export default HoodCardsList;
