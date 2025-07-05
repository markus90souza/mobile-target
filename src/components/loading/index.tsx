import { ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";

const Loading = () => {
  return (
    <ActivityIndicator color={colors.blue[500]} style={styles.container} />
  );
};

export { Loading };
