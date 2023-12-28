import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SampleScreen from './screens/SampleScreen';
import DetailScreen from './screens/DetailScreen';
import AboutScreen from './screens/AboutScreen';

import Header from './components/Header';

import { Ionicons } from '@expo/vector-icons';

import store from './store'; // Import the store
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();
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

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sample" component={SampleScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={
            ({route}) => (
              {
                header: () => <Header title={getName(route)} />,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
          
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'About') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  }
          
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              }
            ) 
          }
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
