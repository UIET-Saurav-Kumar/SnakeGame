import { TouchableOpacity, StyleSheet, View ,Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../styles/color'
import { FontAwesome } from "@expo/vector-icons";
import { JSX } from "react";

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  score: number;
  isPaused: boolean;
}


export default function Header({
  score,
  reloadGame,
  pauseGame,
  isPaused,
}: HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadGame}>
        <Ionicons name="reload-circle" size={35} color={Colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity onPress={pauseGame}>
        <FontAwesome
          name={isPaused ? "play-circle" : "pause-circle"}
          size={35}
          color={Colors.primary}
        />
      </TouchableOpacity>

      <Text style={{fontSize : 20, fontWeight : 'bold', color : Colors.primary }}>{score}</Text>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.primary,
    borderWidth: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomWidth: 0,
    padding: 15,
    backgroundColor: Colors.background,
    marginTop : 30
  },
});
