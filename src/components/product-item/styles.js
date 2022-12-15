import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 130,
    },
    item: {
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'Hind-Bold',
        fontSize: 18,
    },
    detailsContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    price: {
        fontFamily: 'Hind-SemiBold',
        fontSize: 18,
    },
    weight: {
        fontFamily: 'Hind-Regular',
        fontSize: 18,
    }
});

