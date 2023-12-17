import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [input, setInput] = useState([
    { name: "userName", text: "" },
    { name: "balance", text: "" },
  ]);

  const handlePress = () => {
    router.push({ pathname: "/home", params: { userName: input[0].text } });
  };

  return (
    <View style={styles.container}>
      <InputField name="userName" setInput={setInput} placeholder="Adınız" />
      <InputField
        name="balance"
        setInput={setInput}
        placeholder="Bakiyeniz"
        isNumber={true}
      />
      <Button text="Kaydet" onPress={handlePress} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
