import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ActivityIndicator } from 'react-native';

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import {
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';
import { Dashboard } from './src/screens/dashboard';
import { Delivery } from './src/screens/delivery';
import { propsNavigationStack } from './src/models';

export default function App() {

  const Stack = createNativeStackNavigator<propsNavigationStack>()

  const [fontsLoad] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
    Roboto_700Bold,
    Poppins_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  })

  if (!fontsLoad) {
    return <ActivityIndicator color={theme.colors.linear_gradient_light} size={45} />
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='Dashboard'
              component={Dashboard}
              options={{
                title: 'Visão Geral',
                headerTintColor: theme.colors.linear_gradient_dark,
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: {
                  fontSize: 18,
                  color: theme.colors.title_login,
                }
              }}
            />
            <Stack.Screen
              name='Delivery'
              component={Delivery}
              options={{
                title: 'Nova entrega',
                headerTintColor: theme.colors.linear_gradient_dark,
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTitleStyle: {
                  fontSize: 18,
                  color: theme.colors.title_login,
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}