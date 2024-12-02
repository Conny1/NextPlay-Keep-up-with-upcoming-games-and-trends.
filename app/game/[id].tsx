import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Rating, AirbnbRating } from "react-native-ratings";

const Gamescreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: "Cyberpunk 2047" });
  }, []);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.starContainer}>
          <AntDesign
            style={{ backgroundColor: "#dae0e4", padding: 3, borderRadius: 7 }}
            name="staro"
            size={24}
            color="black"
          />
          <Text>Action,</Text>
          <Text>Adventure</Text>
        </View>

        <View>
          <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold" }}>
            About the game
          </Text>
          <Text style={{ lineHeight: 18, marginBottom: 20 }}>
            Set in the dystopian Night City, Cyberpunk 2077 offers a richly
            detailed, futuristic world filled with advanced technology and
            societal decay. Players take on the role of V, a customizable
            mercenary, navigating a story that involves themes of transhumanism,
            corporate power, and rebellion.
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 15 }}>Release Date: Dec, 9, 2020</Text>
          <Text style={{ lineHeight: 18, color: "gray", marginBottom: 10 }}>
            Platforms: Playstation 5, Xbox 1,Miscrosoft windows, Google stadia,
            Playstation 4
          </Text>
        </View>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/close-up-studio-photo-elite-unit-special-forces-soldier-camouflage-uniform-holding-assault-rifle-with-laser-sight-aims-target_613910-20395.jpg?t=st=1732735261~exp=1732738861~hmac=6b6f81a6f83bb5e03d85bd31599312957fd3fb2b56188433fa40d20bc89d08c0&w=1380",
          }}
          height={200}
          // width={100}
          style={{ width: "100%", resizeMode: "cover" }}
        />

        <View>
          <Rating
            ratingCount={10}
            imageSize={30}
            showRating
            type="custom"
            ratingColor="black"
            ratingBackgroundColor="#e9e1e1"
            style={{ backgroundColor: "inherit" }}
            tintColor="#ffff"
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 7,
            display: "flex",
            width: "100%",
            flexDirection: "row",
            backgroundColor: "#1e90ff",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <AntDesign name="hearto" size={24} color="white" />
          <Text style={{ color: "#fff" }}>Add to wishlist</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
