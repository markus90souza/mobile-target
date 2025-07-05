import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Trasaction = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Transaction Details</Text>
      <Text>Transaction ID: {id}</Text>
    </View>
  );
};

export default Trasaction;
