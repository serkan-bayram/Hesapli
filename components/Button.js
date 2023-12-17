import { Pressable, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";

export default function Button({ text, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isPressed && { borderBottomWidth: 1 }]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 280,
    height: 50,
    borderColor: colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 16,
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.secondary,
  },
});
