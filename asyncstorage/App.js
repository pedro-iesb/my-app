import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import Router from '../navigator/src/routes/Router';
import DrawerRoutes from './src/routes/DrawerRoutes';

export default function App() {
  return (
    // <Router/>

    <PaperProvider>
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>

  );
}