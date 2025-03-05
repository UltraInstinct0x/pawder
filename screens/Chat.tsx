import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Icon } from '../components';
import styles, { PRIMARY_COLOR, WHITE } from '../assets/styles';
import DEMO from '../assets/data/demo';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
  avatar?: any;
}

const Chat = () => {
  const route = useRoute();
  const navigation = useNavigation();
  
  console.log("Chat screen mounted. Route params:", route.params);
  
  const userId = route.params?.userId;
  const name = route.params?.name;
  
  // Find the user from DEMO data
  const chatPartner = DEMO.find(user => user.id === userId);
  
  if (!userId || !name || !chatPartner) {
    console.error("Missing required parameters or user not found:", { userId, name });
    Alert.alert("Error", "Cannot load chat");
    navigation.goBack();
    return null;
  }

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: chatPartner.message,
      sender: 'other',
      timestamp: new Date(),
      avatar: chatPartner.image
    },
    {
      id: '2',
      text: 'Hi! Nice to meet you!',
      sender: 'user',
      timestamp: new Date(),
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message.trim(),
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([newMessage, ...messages]);
      setMessage('');
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerLeft: () => (
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Icon name="chevron-back" size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      )
    });
  }, [navigation, name]);

  return (
    <KeyboardAvoidingView 
      style={styles.chatContainer} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FlatList
        data={messages}
        inverted
        renderItem={({ item }) => (
          <View style={[
            styles.messageBubble,
            item.sender === 'user' ? styles.userMessage : styles.otherMessage
          ]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 15 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity 
          style={styles.sendButton} 
          onPress={sendMessage}
        >
          <Icon name="send" size={24} color={WHITE} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
