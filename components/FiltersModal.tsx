import React from 'react';
import { Modal, View, Text, TouchableOpacity, Switch } from 'react-native';
import styles from '../assets/styles';

interface FiltersModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  showOnlyOnline: boolean;
  showWithPhotos: boolean;
  maximumDistance: number;
}

const FiltersModal = ({ visible, onClose, onApplyFilters }: FiltersModalProps) => {
  const [filters, setFilters] = React.useState<FilterOptions>({
    showOnlyOnline: false,
    showWithPhotos: true,
    maximumDistance: 10
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Filters</Text>
          
          <View style={styles.filterItem}>
            <Text>Show only online</Text>
            <Switch
              value={filters.showOnlyOnline}
              onValueChange={(value) => 
                setFilters(prev => ({ ...prev, showOnlyOnline: value }))
              }
            />
          </View>

          <View style={styles.filterItem}>
            <Text>Show with photos only</Text>
            <Switch
              value={filters.showWithPhotos}
              onValueChange={(value) => 
                setFilters(prev => ({ ...prev, showWithPhotos: value }))
              }
            />
          </View>

          <TouchableOpacity 
            style={styles.modalApplyButton}
            onPress={() => {
              onApplyFilters(filters);
              onClose();
            }}
          >
            <Text style={styles.modalApplyText}>Apply Filters</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FiltersModal;
