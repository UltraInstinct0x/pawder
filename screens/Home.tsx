import React, { useRef, useState } from "react";
import { View, ImageBackground, Share, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem, SupportModal } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
  const navigation = useNavigation();
  const swiperRef = useRef<CardStack | null>(null);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleLike = () => {
    console.log("Like pressed, attempting swipe right");
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  const handleDislike = () => {
    console.log("Dislike pressed, attempting swipe left");
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const handleSupport = () => {
    setShowSupportModal(true);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this profile on Pawder!',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardPress = (userId: string) => {
    navigation.navigate('Profile', { userId });
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop={false}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiperRef}
          onSwipedLeft={() => console.log("Card swiped left - Dislike")}
          onSwipedRight={() => console.log("Card swiped right - Like")}
          swipeAnimationDuration={350}
          stackSize={3}
          style={styles.cardStack}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => handleCardPress(item.id)}
              >
                <CardItem
                  hasActions
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                  onPressSupport={handleSupport}
                  onPressLike={handleLike}
                  onPressDislike={handleDislike}
                  onPressShare={handleShare}
                />
              </TouchableOpacity>
            </Card>
          ))}
        </CardStack>

        <SupportModal 
          visible={showSupportModal}
          onClose={() => setShowSupportModal(false)}
        />
      </View>
    </ImageBackground>
  );
};

export default Home;
