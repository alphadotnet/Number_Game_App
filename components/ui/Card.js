import { Text, View, StyleSheet, Dimensions } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginTop: deviceWidth < 380 ? 25 : 50,
    backgroundColor: "#d12525",
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
