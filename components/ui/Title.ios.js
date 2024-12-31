import {Text, StyleSheet, Platform} from 'react-native';

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
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({'ios': 0, 'android': 1}),
        padding: 12,
        maxWidth: '80%',
        width: 350,
    }
});