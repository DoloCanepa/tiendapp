import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cart } from "../screens";
import { isIOS } from "../utils";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
     return (
        <Stack.Navigator 
        initialRouteName="Cart"
        screenOptions={{
            headerStyle: {
              backgroundColor: isIOS ? colors.backgroundDark : colors.backgroundLight,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
                fontFamily: 'Hind-SemiBold',
              },
              presentation: 'card', 
              headerBackTitle: '',
          }}>
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
     );
};

export default CartNavigator;