import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import theme from "../../theme/style";

const CategoryBeverages = ({ image, itemName, onPress, active }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.categoryItem}>
      <View style={styles.categoryBeverages}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.text}>{itemName}</Text>
    </TouchableOpacity>
  );
};

export default CategoryBeverages;

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 30,
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    fontWeight: "400",
  },
  categoryBeverages: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: theme.colors.greenColor,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
