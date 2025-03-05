import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../assets/styles';

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'San Francisco',
  'Miami',
  'Seattle'
];

interface CityModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectCity: (city: string) => void;
}

const CityModal = ({ visible, onClose, onSelectCity }: CityModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select City</Text>
          <FlatList
            data={cities}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  onSelectCity(item);
                  onClose();
                }}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
          />
          <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CityModal;
