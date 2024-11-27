import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const GameCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/close-up-studio-photo-elite-unit-special-forces-soldier-camouflage-uniform-holding-assault-rifle-with-laser-sight-aims-target_613910-20395.jpg?t=st=1732735261~exp=1732738861~hmac=6b6f81a6f83bb5e03d85bd31599312957fd3fb2b56188433fa40d20bc89d08c0&w=1380",
        }}
        height={200}
        // width={100}
        style={{ width: "100%", resizeMode: "cover", borderRadius: 10 }}
      />
      <View>
        <Text style={{ fontWeight: 500, fontSize: 18 }}>Data</Text>
        <Text>PC, PS5</Text>
        <Text>4.9</Text>
      </View>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
  },
});
