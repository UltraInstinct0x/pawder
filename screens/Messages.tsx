import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Alert,
} from "react-native";
import { Icon, Message } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import { useNavigation } from "@react-navigation/native";

const Messages = () => {
  const navigation = useNavigation();

  const handleMessagePress = (item: any) => {
    console.log("Attempting to navigate to Chat with item:", item);
    
    if (!item || !item.id || !item.name) {
      console.error("Invalid item data:", item);
      Alert.alert("Error", "Cannot open chat - missing data");
      return;
    }
    
    try {
      navigation.navigate('Chat', {
        userId: item.id,
        name: item.name
      });
    } catch (e) {
      console.error("Navigation error:", e);
      Alert.alert("Error", "Failed to open chat");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={DEMO}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMessagePress(item)}>
              <Message
                image={item.image}
                name={item.name}
                lastMessage={item.message}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Messages;
