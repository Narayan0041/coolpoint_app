import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import NavbarDifferentSection from "../component/common/NavbarDifferentSection";
import theme from "../theme/style";
import Slider from "../component/common/Slider";
import CategoryBeverages from "../component/common/CategoryBeverages";
import Home from "../pages/Home";

const { width } = Dimensions.get("window");

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionListData = [
    {
      icon: "home",
      sectionName: "Home",
    },
    {
      icon: "heart",
      sectionName: "WishList",
    },
    {
      icon: "user",
      sectionName: "Profile",
    },
    {
      icon: "shopping-cart",
      sectionName: "Kart",
    },
  ];
  const category = [
    {
      image:
        "https://imgs.search.brave.com/SOx9zLP05znB93Mwm-7OjdfIqxpefCASnYqxdh6r6mY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC82MDQtNjA0MjA4/MF9zcHJpdGUtc3By/aXRlLWJvdHRsZS10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLWhk/LXBuZy1kb3dubG9h/ZC5wbmc",
      beveragesItemName:"sprite",
    },
    {
      image:
        "https://imgs.search.brave.com/SOx9zLP05znB93Mwm-7OjdfIqxpefCASnYqxdh6r6mY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC82MDQtNjA0MjA4/MF9zcHJpdGUtc3By/aXRlLWJvdHRsZS10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLWhk/LXBuZy1kb3dubG9h/ZC5wbmc",
      beveragesItemName: "sprite",
    },
    {
      image:
        "https://imgs.search.brave.com/SOx9zLP05znB93Mwm-7OjdfIqxpefCASnYqxdh6r6mY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC82MDQtNjA0MjA4/MF9zcHJpdGUtc3By/aXRlLWJvdHRsZS10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLWhk/LXBuZy1kb3dubG9h/ZC5wbmc",
      beveragesItemName: "sprite",
    },
    {
      image:
        "https://imgs.search.brave.com/SOx9zLP05znB93Mwm-7OjdfIqxpefCASnYqxdh6r6mY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC82MDQtNjA0MjA4/MF9zcHJpdGUtc3By/aXRlLWJvdHRsZS10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLWhk/LXBuZy1kb3dubG9h/ZC5wbmc",
      beveragesItemName: "sprite",
    },
    {
      image:
        "https://imgs.search.brave.com/SOx9zLP05znB93Mwm-7OjdfIqxpefCASnYqxdh6r6mY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC82MDQtNjA0MjA4/MF9zcHJpdGUtc3By/aXRlLWJvdHRsZS10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLWhk/LXBuZy1kb3dubG9h/ZC5wbmc",
      beveragesItemName: "sprite",
    },
    {
      image:
        "https://imgs.search.brave.com/SOx9zLP05znB93Mwm-7OjdfIqxpefCASnYqxdh6r6mY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC82MDQtNjA0MjA4/MF9zcHJpdGUtc3By/aXRlLWJvdHRsZS10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLWhk/LXBuZy1kb3dubG9h/ZC5wbmc",
      beveragesItemName: "sprite",
    },
  ];
  const handlePress = (value) => {
    setActiveTab(value);
  };
  const handleSelectCategory = (itemName) => {
    setActiveCategory(itemName);
    console.warn(itemName);
  };

  const renderCategoryItem = ({ item }) => (
    <CategoryBeverages
      image={item.image}
      itemName={item.beveragesItemName}
      active={activeCategory}
      onPress={() => handleSelectCategory(item.beveragesItemName)}
    />
  );

  return (
    <View style={styles.container}>
      <Home/>
      <Slider />
      <View style={styles.categoryContainer}>
        <FlatList
          data={category}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContentContainer}
        />
      </View>
      <View style={styles.navbar}>
        {sectionListData.map((item, index) => (
          <NavbarDifferentSection
            SectionText={item.sectionName}
            iconName={item.icon}
            key={index}
            onPress={() => handlePress(item.sectionName)}
            activeTab={activeTab}
          />
        ))}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    width:"100%"
  },
  categoryContentContainer: {
    categoryContentContainer: {
      flexGrow: 1,
      justifyContent: 'space-between', 
    },
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: theme.colors.gray,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
