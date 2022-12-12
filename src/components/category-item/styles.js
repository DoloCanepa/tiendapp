import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet. create({
container: {
   flex: 1,
   borderRadius: 10,
   marginHorizontal: 20,
   marginVertical: 10,
   height: 160,
},
contentContainer: {
   flex: 1,
   borderRadius: 10,
   shadowColor: "#000",
   shadowOffset: {
	 width: 0,
	 height: 1,
   },
   shadowOpacity: 0.22,
   shadowRadius: 2.22,

   elevation: 3,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 10,
},
title: {
    fontSize: 18,
    fontFamily: 'Hind-SemiBold',
    color: colors.text,
}

});