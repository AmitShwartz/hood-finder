import Styled from "@emotion/native";
import { observer } from "mobx-react";
import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import useFormStore from "../../hooks/stores/useFormStore";
import HoodFinderFilterModalContent from "./HoodFinderFilterModalContent";

const Overlay = Styled.View({
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const HoodFinderFilterModal = () => {
  const { isShowModal, hideModal } = useFormStore();

  return (
    <Modal
      animationType="slide"
      visible={isShowModal}
      onRequestClose={hideModal}
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback onPress={hideModal}>
          <Overlay />
        </TouchableWithoutFeedback>
        <HoodFinderFilterModalContent />
      </View>
    </Modal>
  );
};

export default observer(HoodFinderFilterModal);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
