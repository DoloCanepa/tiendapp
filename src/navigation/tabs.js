import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { colors } from "../constants/themes/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrderNavigator from "./orders";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    const cart = useSelector((state) => state.cart.items);
    return (
        <BottomTab.Navigator 
        initialRouteName="ShopTab"
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'Hind-Regular',
                fontSize: 12,
            },
            tabBarActiveTintColor: colors.text,
            tabBarInactiveTintColor: colors.gray,
        }}>
        <BottomTab.Screen 
             name="ShopTab" 
             component={ShopNavigator} 
             options={{
                title: 'Shop',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={22}
                    color={colors.primary}
                    />
                ),
             }}
            />  
            <BottomTab.Screen name="CartTab" component={CartNavigator} 
              options={{
                title: 'Cart',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                    name={focused ? 'cart' : 'cart-outline'}
                    size={22}
                    color={colors.primary}
                  />
                ),
                tabBarBadge: cart.length === 0 ? null : cart.length,
                tabBarBadgeStyle: {
                    backgroundColor: colors.primary,
                    color: colors.text,
                    fontFamily: 'Hind-SemiBold',
                    fontSize: 12,
                }
             }}
            /> 
            <BottomTab.Screen name="OrdersTab" component={OrderNavigator} 
              options={{
                title: 'Orders',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                    name={focused ? 'file-tray' : 'file-tray-outline'}
                    size={22}
                    color={colors.primary}
                />
                ),
             }}
          />  
        </BottomTab.Navigator>
    );
};


export default Tabs;