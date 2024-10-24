import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

const Riddle = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Riddles" });
  }, []);

  return (
    <View>
      <Text>Riddle</Text>
    </View>
  );
};

export default Riddle;

const styles = StyleSheet.create({});
