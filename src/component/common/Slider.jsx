import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeroSliderContain from "../HeroSliderContain";
const { height, width } = Dimensions.get("window");
export default function Slider() {
  const [data, SetData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  let image = [
    {
      image:
        "https://gumlet-images.assettype.com/afaqs%2F2023-05%2F6b7374e7-0d01-4115-bf64-0be173a92e76%2FCarry_Your_Game_Poster.jpg?rect=0%2C42%2C1900%2C1069&format=webp&w=480&dpr=2.6",
    },
    {
      image:
        "https://gumlet-images.assettype.com/afaqs%2F2023-05%2F6b7374e7-0d01-4115-bf64-0be173a92e76%2FCarry_Your_Game_Poster.jpg?rect=0%2C42%2C1900%2C1069&format=webp&w=480&dpr=2.6",
    },
    {
      image:
        "https://gumlet-images.assettype.com/afaqs%2F2023-05%2F6b7374e7-0d01-4115-bf64-0be173a92e76%2FCarry_Your_Game_Poster.jpg?rect=0%2C42%2C1900%2C1069&format=webp&w=480&dpr=2.6",
    },
    {
      image:
        "https://gumlet-images.assettype.com/afaqs%2F2023-05%2F6b7374e7-0d01-4115-bf64-0be173a92e76%2FCarry_Your_Game_Poster.jpg?rect=0%2C42%2C1900%2C1069&format=webp&w=480&dpr=2.6",
    },
  ];
  useEffect(() => {
    SetData(image);
  }, []);
  return (
    <View style={{  marginTop: "25%" }}>
      <View
        style={{
          height: height / 13 + 100,
          //   justifyContent: 'center',
          //   alignItems: 'center',
        }}
      >
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width,
                  //   height: height ,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <HeroSliderContain image={item.image} />
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 50 : 8,
                height: currentIndex == index ? 10 : 8,
                borderRadius: currentIndex == index ? 5 : 4,
                backgroundColor: currentIndex == index ? "green" : "gray",
                marginLeft: 5,
              }}
            ></View>
          );
        })}
      </View>
    </View>
  );
}
