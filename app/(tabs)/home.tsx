import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Href, useNavigation, useRouter } from "expo-router";
import { CategoryCard } from "@/components/Home";

const Home = () => {
  const [category, setcategory] = useState("riddle");
  const navigation = useNavigation();
  const route = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose a category",
    });
  }, []);

  const startCategory = () => {
    if (!category) return alert("Select category!!");
    const path = category as Href<string>;
    route.push(path);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <CategoryCard title="riddle" setcategory={setcategory} />
      </View>
      <TouchableOpacity onPress={startCategory} style={styles.btn}>
        <Text style={{ fontWeight: "800", fontSize: 17, color: "#fff" }}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    flex: 1,
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: "#2095f4",
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
});
