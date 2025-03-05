import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import CityModal from "./CityModal";
import styles, { DARK_GRAY } from "../assets/styles";

const City = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("New York");

  return (
    <>
      <TouchableOpacity 
        style={styles.city} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.cityText}>
          <Icon name="location-sharp" size={13} color={DARK_GRAY} /> {selectedCity}
        </Text>
      </TouchableOpacity>

      <CityModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectCity={setSelectedCity}
      />
    </>
  );
};

export default City;
