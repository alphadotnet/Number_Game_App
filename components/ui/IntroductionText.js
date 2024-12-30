import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

// Gọi style trong IntroductionText({children, style}) để ghi đè thêm kiểu dáng cho ứng dụng
function IntroductionText({ children, style }) {
  return <Text style={[styles.introductionText, style]}>{children}</Text>;
}

export default IntroductionText;

const styles = StyleSheet.create({
  introductionText: {
    color: Colors.accent300,
    fontSize: 20,
    fontFamily: 'open-sans-regular',
  },
});
