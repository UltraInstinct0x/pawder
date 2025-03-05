import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const ProfileItem = ({
  matches,
  name,
  age,
  location,
  info1,
  info2,
  info3,
  info4,
}) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name="heart" size={13} color={WHITE} /> {matches}% Match!
      </Text>
    </View>

    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      {age} - {location}
    </Text>

    {info1 && (
      <View style={styles.info}>
        <View style={{ marginRight: 8 }}>
          <Icon name="person" size={12} color={DARK_GRAY} />
        </View>
        <Text style={[styles.infoContent, { color: DARK_GRAY }]}>{info1}</Text>
      </View>
    )}

    {info2 && (
      <View style={styles.info}>
        <View style={{ marginRight: 8 }}>
          <Icon name="restaurant" size={12} color={DARK_GRAY} />
        </View>
        <Text style={[styles.infoContent, { color: DARK_GRAY }]}>{info2}</Text>
      </View>
    )}

    {info3 && (
      <View style={styles.info}>
        <View style={{ marginRight: 8 }}>
          <Icon name="airplane" size={12} color={DARK_GRAY} />
        </View>
        <Text style={[styles.infoContent, { color: DARK_GRAY }]}>{info3}</Text>
      </View>
    )}

    {info4 && (
      <View style={styles.info}>
        <View style={{ marginRight: 8 }}>
          <Icon name="time" size={12} color={DARK_GRAY} />
        </View>
        <Text style={[styles.infoContent, { color: DARK_GRAY }]}>{info4}</Text>
      </View>
    )}
  </View>
);

export default ProfileItem;
