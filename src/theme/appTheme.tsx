import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    theme:{
        flex:1,
        backgroundColor: 'black',
    },
    calcContainer: {
        paddingHorizontal: 10,
        // backgroundColor: 'red',
        flex:1,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    subResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    }
});