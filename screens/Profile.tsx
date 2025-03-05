import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Dimensions,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import ImageViewer from "../components/ImageViewer";

const Profile = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageViewerVisible, setImageViewerVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params as { userId: string };

  const profile = DEMO.find(item => item.id === userId);

  if (!profile) {
    return null;
  }

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOptions = () => {
    Alert.alert(
      "Profile Options",
      "Choose an action",
      [
        { text: "Report User", onPress: () => console.log("Report") },
        { text: "Block User", onPress: () => console.log("Block") },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  const handleStartChat = () => {
    navigation.navigate('Chat', { userId: profile.id, name: profile.name });
  };

  const images = [
    profile.image,
    require("../assets/images/bg.png"),
    require("../assets/images/bg.png"),
  ];

  const renderImage = ({ item, index }) => (
    <TouchableOpacity 
      style={[styles.imageSlide, { width: Dimensions.get('window').width }]}
      onPress={() => setImageViewerVisible(true)}
    >
      <ImageBackground source={item} style={styles.photo}>
        <View style={styles.top}>
          <TouchableOpacity onPress={handleBack}>
            <Icon
              name="chevron-back"
              size={20}
              color={WHITE}
              style={styles.topIconLeft}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleOptions}>
            <Icon
              name="ellipsis-vertical"
              size={20}
              color={WHITE}
              style={styles.topIconRight}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <View>
          <FlatList
            data={images}
            renderItem={renderImage}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.floor(
                event.nativeEvent.contentOffset.x / Dimensions.get('window').width
              );
              setActiveImageIndex(newIndex);
            }}
          />
          <View style={styles.pagination}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === activeImageIndex && styles.paginationDotActive
                ]}
              />
            ))}
          </View>
        </View>

        <ImageViewer
          visible={imageViewerVisible}
          images={images}
          initialIndex={activeImageIndex}
          onClose={() => setImageViewerVisible(false)}
        />

        <ProfileItem
          matches={profile.match}
          name={profile.name}
          age={profile.age}
          location={profile.location}
          info1={profile.info1}
          info2={profile.info2}
          info3={profile.info3}
          info4={profile.info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton} onPress={handleOptions}>
            <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton} onPress={handleStartChat}>
            <Icon name="chatbubble" size={20} color={WHITE} />
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
