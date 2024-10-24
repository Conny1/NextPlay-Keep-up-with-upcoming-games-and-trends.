import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  setcategory: React.Dispatch<React.SetStateAction<string>>;
  title: string;
};

const CategoryCard = ({ setcategory, title }: Props) => {
  const [selected, setselected] = useState(false);
  useEffect(() => {
    setselected(false);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        if (selected) {
          setcategory("riddle");
        } else {
          setcategory("");
        }
        setselected((prev) => !prev);
      }}
      style={{ ...styles.card, backgroundColor: selected ? "#fff" : "#2095f4" }}
    >
      <MaterialIcons
        size={28}
        name="widgets"
        color={selected ? "#000" : "#fff"}
      />

      <Text
        style={{
          fontWeight: "800",
          fontSize: 17,
          textTransform: "capitalize",
          color: selected ? "#000" : "#fff",
        }}
      >
        {title + "s"}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    borderColor: "#2095f4",
    borderWidth: 1,
    maxWidth: "40%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
