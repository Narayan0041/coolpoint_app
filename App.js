import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Coolpoint from "./src/component/coolpoint";
import { Provider } from "react-redux";
import { store } from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Coolpoint />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
