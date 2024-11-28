import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Gamescreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: "Cyberpunk 2047" });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.starContainer}>
        <AntDesign
          style={{ backgroundColor: "#dae0e4", padding: 3, borderRadius: 7 }}
          name="staro"
          size={24}
          color="black"
        />
        <Text>Action</Text>
        <Text>Adventure</Text>
      </View>

      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: "bold" }}>
        About the game
      </Text>
      <Text style={{ lineHeight: 18 }}>
        Set in the dystopian Night City, Cyberpunk 2077 offers a richly
        detailed, futuristic world filled with advanced technology and societal
        decay. Players take on the role of V, a customizable mercenary,
        navigating a story that involves themes of transhumanism, corporate
        power, and rebellion.
      </Text>
    </View>
  );
};

export default Gamescreen;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 16,
  },
  starContainer: {
    width: "100%",
    display: "flex",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
