import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navigation()
{
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=>({
                   tabBarInactiveTinColor:"#646464",
                   tabBarActiveTintColor:"#00a680",
                   tabBarIcon:({color})=>screenOptions(route,color)
                })}
            >
                <Tab.Screen name="restaurants-stack" 
                component={RestaurantsStack} 
                 options={{title:"Restaurantes",headerShown:false}} />
                <Tab.Screen name="favorites-stack" 
                component={FavoritesStack} 
                options={{title:"Favoritos",headerShown:false}} />
                <Tab.Screen name="top-restaurants-stack" component={TopRestaurantsStack} options={{title:"Top 5",headerShown:false}} />
                <Tab.Screen name="search-stack" component={SearchStack} options={{title:"Buscador",headerShown:false}} />
                <Tab.Screen name="account-stack" component={AccountStack} options={{title:"Cuenta",headerShown:false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function screenOptions(route,color)
{
    let iconName;

    switch(route.name)
    {
        case "restaurants-stack":
            iconName = "compass-outline";
            break;

        case "favorites-stack":
            iconName = "heart-outline";
            break;
        
        case "top-restaurants-stack":
            iconName = "star-outline";
            break;

        case "search-stack":
            iconName = "magnify";
            break;

        case "account-stack":
            iconName = "home-outline";
            break;
    }

    return (<Icon type="material-community" name={iconName} size={22} color={color} />);
}