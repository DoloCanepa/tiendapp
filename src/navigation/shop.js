import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories, Product, Products } from "../screens";
import { colors } from "../constants/themes/colors";
import { isIOS } from "../utils";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
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
            name="Categories" 
            component={Categories} 
            options={{
                headerShown: false,
              }}
            />
          <Stack.Screen 
            name="Product" 
            component={Product} 
            options={({ route }) => ({
                title: route.params.title,
              })}
            />
          <Stack.Screen 
            name="Products" 
            component={Products}
            options={({ route }) => ({
                title: route.params.title,
              })}
            />
        </Stack.Navigator>
    );
};

export default ShopNavigator;