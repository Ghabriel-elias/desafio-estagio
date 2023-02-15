import React, { useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from "./../../global/styles/theme";
import { Feather } from '@expo/vector-icons';
import { DashboardHome } from "./dashbord-home";
import { Static } from "./dashboardEstatic";

import { useNavigation } from '@react-navigation/native'

export function Dashboard({ route }: any) {

  const icons: any = {
    Home: {
      name: "home"
    },
    Perfil: {
      name: "user"
    },
    Relatorios: {
      name: 'file-text'
    }
  }

  const Tab = createBottomTabNavigator()

  const navigation: any = useNavigation()


  return (
    <Tab.Navigator
      initialRouteName="Home"

      safeAreaInsets={{
        bottom: 10,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const { name } = icons[route.name]
          return <Feather name={name} color={color} size={25} />
        },
        tabBarInactiveTintColor: theme.colors.border_google,
        tabBarActiveTintColor: theme.colors.linear_gradient_dark,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopColor: 'transparent',
          shadowColor: 'transparent',
        },
      })}
    >
      <Tab.Screen name="Relatorios" component={Static}
        options={{
          title: 'Relatórios',
        }}
      />
      <Tab.Screen name="Home" component={DashboardHome}
        options={{
          title: 'Visão Geral',
        }}
      />
      <Tab.Screen name="Perfil" component={Static} />
    </Tab.Navigator>
  )
}