import  * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';

const Stack = createStackNavigator();

function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "HomeScreen" screenOptions = {{
          headerShown: false
        }}>
        <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
        <Stack.Screen name = "ISSLocationScreen" component = {ISSLocationScreen}/>
        <Stack.Screen name = "MeteorScreen" component = {MeteorScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;