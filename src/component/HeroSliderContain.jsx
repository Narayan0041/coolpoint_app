import { Image, StyleSheet, View } from "react-native";
import React from "react";

const HeroSliderContain = ({image}) => {
  return (
    <View style={styles.heroSliderContainer}>
      <Image
        source={{
          uri:image,
        }}
        style={{ width: 400, height: 150 , borderRadius:15}}
      />
    </View>
  );
};

export default HeroSliderContain;

const styles = StyleSheet.create({
  heroSliderContainer: {
      flex: 1,
    //   marginTop:"50rem",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
