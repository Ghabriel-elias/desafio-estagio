import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from "../../../global/styles/theme";
import { Feather } from '@expo/vector-icons';
import { DashboardHome } from "../HomeDashboard";
import { Static } from "../StaticsScreens";

export function Dashboard() {

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
        tabBarInactiveTintColor: theme.colors.gray_border_google,
        tabBarActiveTintColor: theme.colors.linear_gradient_dark,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopColor: 'transparent',
          shadowColor: 'transparent',
        },
      })}
    >
      <Tab.Screen name="Relatorios" key={1} component={Static}
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