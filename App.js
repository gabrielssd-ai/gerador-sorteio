import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MegaSena from './screens/MegaSena';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import JogoBicho from './screens/JogoBicho';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
          name='MegaSena'
          component={MegaSena}
          options={{
            title: 'Sorteio Mega Sena',
            tabBarIcon: ({color,size})=> <Ionicons name='person' color={color} size={size} />
          }}
          />

          <Tab.Screen 
          name='JogoBicho'
          component={JogoBicho}
          options={{
            title: 'Jogo do Bicho',
            tabBarIcon: ({color,size})=> <Ionicons name='person' color={color} size={size} />
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
