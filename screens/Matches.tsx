import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CardItem, Icon } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";

const Matches = () => {
  const navigation = useNavigation();
  const [showSubscriptions, setShowSubscriptions] = useState(false);

  const handleProfilePress = (userId: string) => {
    navigation.navigate('Profile', { userId });
  };

  const toggleView = () => {
    setShowSubscriptions(!showSubscriptions);
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <View style={styles.top}>
          <Text style={styles.title}>
            {showSubscriptions ? 'Subscriptions' : 'Matches'}
          </Text>
          <TouchableOpacity onPress={toggleView}>
            <Icon name="swap-horizontal" color={DARK_GRAY} size={24} />
          </TouchableOpacity>
        </View>

        <FlatList
          key={showSubscriptions ? 'single' : 'grid'}
          numColumns={showSubscriptions ? 1 : 2}
          data={DEMO}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => handleProfilePress(item.id)}
              style={showSubscriptions ? styles.fullWidth : {}}
            >
              <CardItem
                image={item.image}
                name={item.name}
                isOnline={item.isOnline}
                hasVariant={!showSubscriptions}
                status={showSubscriptions ? 'Subscribed' : undefined}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Matches;
