import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../../theme/style";

const NavbarDifferentSection = ({
  SectionText,
  iconName,
  onPress,
  activeTab,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.navbarItem,
        activeTab === SectionText && styles.activeSection,
      ]}
    >
      <View style={styles.NavbarDifferentSection}>
        <Icon
          name={iconName}
          size={22}
          color={activeTab === SectionText ? "white" : "black"}
          style={styles.icon}
        />
        {activeTab === SectionText ? (
          <Text style={styles.activeFont}>{SectionText}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default NavbarDifferentSection;

const styles = StyleSheet.create({
  NavbarDifferentSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  navbarItem: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
  },
  activeSection: {
    backgroundColor: theme.colors.greenColor,
  },
  icon: {
    marginRight: 10,
  },
  activeFont: {
    color: "white",
    fontSize: 16,
  },
});
