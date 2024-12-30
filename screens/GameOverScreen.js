import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>TRÒ CHƠI KẾT THÚC!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        Điện thoại của bạn cần <Text style={styles.heightlightText}>{roundsNumber}</Text>{" "}
        vòng để đoán số <Text style={styles.heightlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Bắt đầu trò chơi mới</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    marginTop: 30,
    borderWidth: 3,
    borderColor: Colors.primary700,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-regular",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  heightlightText: {
    fontFamily: "open-sans",
    color: Colors.accent300,
  },
});
