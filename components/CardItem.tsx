import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from "../assets/styles";

interface CardItemProps extends CardItemT {
  onPressSupport?: () => void;
  onPressLike?: () => void;
  onPressDislike?: () => void;
  onPressShare?: () => void;
}

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
  onPressSupport,
  onPressLike,
  onPressDislike,
  onPressShare,
}: CardItemProps) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? 170 : 350,
      margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: "#363636",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  const handleLikePress = () => {
    onPressLike?.();
  };

  const handleDislikePress = () => {
    onPressDislike?.();
  };

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color={WHITE} size={13} /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity 
            style={styles.miniButton} 
            onPress={onPressSupport}
          >
            <Icon name="hand-right" size={14} color={STAR_ACTIONS} />
          </TouchableOpacity>

         
          <TouchableOpacity 
            style={styles.button}
            onPress={handleDislikePress}
            activeOpacity={0.7}
          >
            <Icon name="close" size={25} color={DISLIKE_ACTIONS} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleLikePress}
            activeOpacity={0.7}
          >
            <Icon name="heart" size={25} color={LIKE_ACTIONS} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.miniButton}
            onPress={onPressShare}
          >
            <Icon name="share" size={14} color={FLASH_ACTIONS} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
