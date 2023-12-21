
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SampleScreen from './screens/SampleScreen';
import DetailScreen from './screens/DetailScreen';
import Header from './components/Header';


const Stack = createNativeStackNavigator();
const mapHeaderNames = {
  "Home": "Tasks",
  "Details": "Task Details",
  "Sample": "Sample"
}

function getName(route) {
  if(!route) return "";
  if(!route.name) return "";
  if(!mapHeaderNames[route.name]) return route.name;
 
  return mapHeaderNames[route.name];
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          ({route}) => (
            {
              header: () => <Header title={getName(route)} />
            }
          )
        }

      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen component={SampleScreen} name="Sample" options={{ title: "Home" }} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

