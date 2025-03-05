import React, { useState } from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  TextInput
} from 'react-native';
import styles, { PRIMARY_COLOR, WHITE } from '../assets/styles';

interface SupportModalProps {
  visible: boolean;
  onClose: () => void;
}

const subscriptionOptions = [
  { months: 1, price: 10 },
  { months: 3, price: 25 },
  { months: 6, price: 45 },
  { months: 12, price: 80 }
];

const SupportModal = ({ visible, onClose }: SupportModalProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleSubscribe = () => {
    const amount = selectedOption !== null 
      ? subscriptionOptions[selectedOption].price 
      : Number(customAmount);
      
    if (amount < 10) {
      alert('Minimum subscription amount is 10 TL');
      return;
    }
    
    // TODO: Implement payment processing
    console.log('Processing payment for:', amount, 'TL');
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Support Subscription</Text>
          
          {subscriptionOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.subscriptionOption,
                selectedOption === index && styles.selectedOption
              ]}
              onPress={() => {
                setSelectedOption(index);
                setCustomAmount('');
              }}
            >
              <Text style={styles.optionText}>
                {option.months} Month{option.months > 1 ? 's' : ''} - {option.price} TL
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.customAmountContainer}>
            <TextInput
              style={styles.customAmountInput}
              placeholder="Custom amount (min. 10 TL)"
              keyboardType="numeric"
              value={customAmount}
              onChangeText={(text) => {
                setCustomAmount(text);
                setSelectedOption(null);
              }}
            />
          </View>

          <TouchableOpacity 
            style={styles.subscribeButton}
            onPress={handleSubscribe}
          >
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.modalCloseButton} 
            onPress={onClose}
          >
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SupportModal;
