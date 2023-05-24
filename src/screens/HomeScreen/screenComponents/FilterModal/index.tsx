import React, { useState } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  isVisible: boolean;
  setVisible: (...args: any[]) => void;
  options: string[];
  selectedOption: string;
  setSelectedOption: (...args: any[]) => void;
};

const FilterModal: React.FC<Props> = ({
  isVisible,
  setVisible,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={closeModal}
      swipeDirection={"down"}
      style={styles.container}
      onBackdropPress={closeModal}
    >
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={closeModal} style={styles.iconArea}>
          <Ionicons name={"chevron-back"} style={styles.backIcon} />
        </TouchableOpacity>
        <FlatList
          data={options}
          keyExtractor={(index) => `options-${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.selectItemArea}
              onPress={() => setSelectedOption(item)}
            >
              <Ionicons
                name={
                  selectedOption === item
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                style={styles.icon}
              />

              <Text style={styles.selectItemText}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedOption(undefined)}
        >
          <Text style={styles.buttonText}>Temizle</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FilterModal;
