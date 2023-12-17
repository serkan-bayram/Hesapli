import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../components/Button";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import colors from "../../config/colors";

export default function Home() {
  const { userName } = useLocalSearchParams();

  const handlePress = () => {
    router.push("/");
  };

  return (
    <View>
      <Text style={{ color: colors.secondary }}>{userName}</Text>
      <Button text="Geri Dön" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({});
