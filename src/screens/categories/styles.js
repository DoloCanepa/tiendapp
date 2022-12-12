import { StyleSheet, StatusBar } from "react-native";

import { colors } from '../../constants/themes/colors';
import { isAndroid } from "../../utils/funtions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundLight,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    title: {
        fontFamily: 'Hind-Regular',
        fontSize: 25,
        color: colors.text,
    },
    containerList: {
        flex: 1,
    }
});