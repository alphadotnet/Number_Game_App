import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#0436a197" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: Colors.primary600,
    textAlign: "center",
    fontWeight: "bold",
    width: "100%",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.75,
  },
});
