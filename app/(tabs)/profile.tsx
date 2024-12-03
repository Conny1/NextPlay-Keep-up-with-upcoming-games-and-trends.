import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { GameCard, WishlistCard } from "@/components";
import AntDesign from "@expo/vector-icons/AntDesign";

const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: "Profile" });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.userDetails}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/close-up-studio-photo-elite-unit-special-forces-soldier-camouflage-uniform-holding-assault-rifle-with-laser-sight-aims-target_613910-20395.jpg?t=st=1732735261~exp=1732738861~hmac=6b6f81a6f83bb5e03d85bd31599312957fd3fb2b56188433fa40d20bc89d08c0&w=1380",
          }}
          height={100}
          width={100}
          style={{ resizeMode: "cover", borderRadius: 90, marginBottom: 10 }}
        />
        <Text style={{ textAlign: "center", fontSize: 20 }}>Alex</Text>
        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}>
          alex@gmail.com
        </Text>
        <TouchableOpacity
          style={{
            marginBottom: 25,
            padding: 7,
            display: "flex",
            width: "50%",
            flexDirection: "row",
            backgroundColor: "#1e90ff",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <AntDesign name="edit" size={24} color="white" />
          <Text style={{ color: "#fff" }}>Edit profile</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold" }}>
          Wish List
        </Text>
        <View style={styles.wishList}>
          <View style={styles.card}>
            <WishlistCard />
          </View>
          <View style={styles.card}>
            <WishlistCard />
          </View>
          <View style={styles.card}>
            <WishlistCard />
          </View>
          <View style={styles.card}>
            <WishlistCard />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 15,
  },
  card: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  wishList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  userDetails: {
    width: "100%",

    alignItems: "center",
  },
});
