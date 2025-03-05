import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import FiltersModal from "./FiltersModal";
import styles, { DARK_GRAY } from "../assets/styles";

const Filters = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleApplyFilters = (filters) => {
    console.log('Applied filters:', filters);
    // Implement filter logic here
  };

  return (
    <>
      <TouchableOpacity 
        style={styles.filters} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.filtersText}>
          <Icon name="filter" size={13} color={DARK_GRAY} /> Filters
        </Text>
      </TouchableOpacity>

      <FiltersModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
};

export default Filters;
