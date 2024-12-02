import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: "Profile" });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/close-up-studio-photo-elite-unit-special-forces-soldier-camouflage-uniform-holding-assault-rifle-with-laser-sight-aims-target_613910-20395.jpg?t=st=1732735261~exp=1732738861~hmac=6b6f81a6f83bb5e03d85bd31599312957fd3fb2b56188433fa40d20bc89d08c0&w=1380",
          }}
          height={100}
          width={100}
          style={{ resizeMode: "cover", borderRadius: 90 }}
        />
        <Text>Alex</Text>
        <Text>alex@gmail.com</Text>
        <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold" }}>
          Wishlist
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 15,
  },
});
