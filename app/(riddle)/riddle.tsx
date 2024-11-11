import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

const Riddle = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Riddles" });
  }, []);

  return (
    <View style={styles.riddlwMain}>
      <View style={styles.riddle}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 18,
            textAlign: "center",
            color: "#5a5a5a",
            lineHeight: 24,
          }}
        >
          I speak without a mouth and hear without ears.I have no body, but i
          come alive with the wind. What am I ?
        </Text>
      </View>

      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontWeight: 600, fontSize: 18 }}>Anser1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontWeight: 600, fontSize: 18 }}>Anser2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Riddle;

const styles = StyleSheet.create({
  riddlwMain: {
    margin: 15,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  riddle: {
    // marginTop: 50,
    margin: 20,
    padding: 15,
    backgroundColor: "#fdf4dc", // Light beige for a paper look
    borderRadius: 8, // Rounded corners for a page effect
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Elevation for Android shadow
    borderWidth: 1,
    borderColor: "#e0c9a6", // Slight border to define the edges of the page
  },
  btnGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  btn: {
    borderColor: "#2095f4",
    borderWidth: 1,
    maxWidth: "47%",
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
