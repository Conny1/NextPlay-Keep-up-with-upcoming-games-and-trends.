import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { GameCard } from "@/components";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 23,
          fontWeight: 500,
          marginBottom: 10,
        }}
      >
        Discover
      </Text>
      <View style={styles.btnGroup}>
        <TouchableOpacity
          style={{ ...styles.btn, borderBottomWidth: 1, borderColor: "black" }}
        >
          <Text style={{ fontSize: 18 }}>Latest</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.btn }}>
          <Text style={{ color: "gray", fontSize: 18 }}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.btn }}>
          <Text style={{ color: "gray", fontSize: 18 }}>Personalised</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ marginBottom: 70 }}>
        <GameCard />
        <GameCard />
        <GameCard />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 15,
  },
  btnGroup: {
    width: "100%",
    display: "flex",
    gap: 10,
    flexDirection: "row",
    // backgroundColor: "red",
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
  btn: {
    padding: 5,
  },
});
