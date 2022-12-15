import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Orders } from "../screens";
import { isIOS } from "../utils";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
     return (
        <Stack.Navigator 
        initialRouteName="Order"
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
                name="Orders"
                component={Orders}
            />
        </Stack.Navigator>
     );
};

export default OrderNavigator;