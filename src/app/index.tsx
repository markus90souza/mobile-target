import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Target App</Text>
      <Text>This is the home screen.</Text>
      <TouchableOpacity
        onPress={() => router.navigate("/target")}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#007BFF",
          borderRadius: 5,
        }}
      >
        <Text>Go to Target</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.navigate("/transaction/123")}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#007BFF",
          borderRadius: 5,
        }}
      >
        <Text>Transação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
