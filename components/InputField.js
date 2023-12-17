import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Easing,
} from "react-native";

import React from "react";
import { useEffect, useRef, useState } from "react";

import colors from "../config/colors";

export default function InputField({ placeholder, isNumber, name, setInput }) {
  const [text, onChangeText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setInput((prevValues) =>
      prevValues.map((prevValue) =>
        prevValue.name === name ? { ...prevValue, text } : prevValue
      )
    );
  }, [text]);

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocus || !!text ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocus]);

  return (
    <View>
      <TextInput
        keyboardType={isNumber ? "numeric" : "default"}
        maxLength={isNumber && 6}
        style={styles.input}
        onChangeText={onChangeText}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <Animated.View
        style={[
          { position: "absolute" },
          {
            top: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [14, -12],
            }),
            left: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [12, 15],
            }),
          },
        ]}
      >
        <Text style={styles.text}>{placeholder}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 280,
    height: 50,
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 16,
    color: colors.secondary,
  },

  text: {
    color: colors.secondary,
    backgroundColor: colors.background,
  },
});
