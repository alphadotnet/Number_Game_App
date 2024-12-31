import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/colors';
function NumberConstainer({children}) {
    return (
        <View style= {styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberConstainer;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.accent300,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24, 
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText:{
        fontSize: 48,
        // fontWeight: 'bold',
        fontFamily: 'open-sans',
        color: Colors.accent300,
    }
});