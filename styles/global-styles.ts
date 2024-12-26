import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: width > 360 ? 70 : 60,
        textAlign: 'right',
        fontWeight: '400',
        // fontFamily: 'SpaceMono',
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: width > 360 ? 40 : 30,
        textAlign: 'right',
        fontWeight: '300',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: width > 360 ? 80 : 70,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: width > 360 ? 30 : 18,
        color: Colors.textPrimary,
        fontWeight: 300,
        fontFamily: 'SpaceMono'
    }
})