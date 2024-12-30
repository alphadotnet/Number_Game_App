import {Text, StyleSheet} from 'react-native';

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );  
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        // fontWeight: 'bold',
        fontFamily: 'open-sans',
        textAlign: 'center',
        color: 'white',
        borderWidth: 2,
        borderColor: "white",
        padding: 12
    }
});