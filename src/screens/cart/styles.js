import { StyleSheet } from "react-native";
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        backgroundColor: colors.white, 
    },
    footer: {
        backgroundColor: colors.white, 
        borderTopWidth: 1,
        borderTopColor: colors.primaryDark,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    buttonConfirm: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonDisabledConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textButtonConfirm: {
        fontSize: 16,
        fontFamily: 'Hind-SemiBold',
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTotalTitle: {
        fontSize: 14,
        fontFamily: 'Hind-Regular',
    },
    textTotal: {
        fontSize: 16,
        fontFamily: 'Hind-Regular',
    },



});