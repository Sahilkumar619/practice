import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { NotesScreen } from '../screens/NotesScreen';
import { ListScreen } from '../screens/ListScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
          
         
        },
        headerStyle: {
          backgroundColor: '#0f172a',
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTintColor: 'white', 
       
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Notes" component={NotesScreen} options={{ title: 'Notes App' }} />
      <Stack.Screen name="List" component={ListScreen} options={{ title: 'Item List' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Item Detail' }} />
    </Stack.Navigator>
  );
};

