import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 20,
        margin: 15,
        borderColor: colors.primary, 
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Hind-SemiBold',
        marginVertical: 5,
        textAlign: 'center',
    },
    label: {
       fontSize: 14,
       fontFamily: 'Hind-Regular',
       marginVertical: 5, 
    },
    input: {
       height: 45, 
       borderBottomColor: colors.primaryDark,
       borderBottomWidth: 1,
       width: '90%',
       fontFamily: 'Hind-Regular',
       marginBottom: 10,
       fontSize: 12,
    },
    promptButton: {
        width: '100%', 
       backgroundColor: colors.backgroundLight,
       borderColor: colors.secondaryDark,
       borderWidth: 1,
       padding: 10,
       borderRadius: 5,
       justifyContent: 'space-around',
       alignItems: 'center',
    },
    prompt: {
       width: '100%',
       flexDirection: 'row',
       marginVertical: 10,
    },
    promptMessage: {
       fontSize: 12,
       color: colors.text,
       fontFamily: 'Hind-Regular',
    },
});