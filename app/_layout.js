import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { View, StatusBar } from "react-native";
import colors from "../config/colors";
import { StatusBar as StatusBarComponent } from "expo-status-bar";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Slot />
      <StatusBarComponent style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: StatusBar.currentHeight,
  },
});
