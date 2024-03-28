import Styled from "@emotion/native";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const CardContainer = Styled.View({
  backgroundColor: colors.lightPink,
  borderRadius: 8,
  padding: 10,
  paddingBottom: 20,
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  width: "100%",
  marginBottom: 16,
});

const Text = Styled.Text(
  {
    fontSize: 16,
  },
  ({ color }: { color?: string }) => ({ color })
);

type Props = {
  neighborhood: string;
  averageAge: number;
  distanceFromCityCenter: number;
};

const HoodCard = ({
  neighborhood,
  averageAge,
  distanceFromCityCenter,
}: Props) => {
  return (
    <CardContainer>
      <Text style={styles.title}>{neighborhood}</Text>
      <Text
        style={styles.distanceText}
      >{`${distanceFromCityCenter} from center`}</Text>
      <Text color={colors.lightGrey}>{`Avg age: ${averageAge}`}</Text>
    </CardContainer>
  );
};

export default HoodCard;

const styles = StyleSheet.create({
  distanceText: {
    color: colors.lightTeal,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
  },
});
