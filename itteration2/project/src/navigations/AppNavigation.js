import React from 'react'
import { Provider } from 'react-native-paper'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import MoreinformationScreen from '../screens/Information/MoreinformationScreen';
import MoreInfoListScreen from '../screens/ItemList/MoreInfoListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import ItemsScreen from '../screens/itemsFolder/ItemsScreen';
import SearchScreen from '../screens/Search/SearchScreen';
//import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import { theme } from '../../src/core/theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from '../../src/screens'

 const Stack = createStackNavigator();

function MainNavigator() {
  return(
  
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
           headerShown: false,
      }}
    >
  
      <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
      
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={MoreinformationScreen}/>
      <Stack.Screen name='RecipesList' component={MoreInfoListScreen} />
      
      <Stack.Screen name='Search' component={SearchScreen} />
     
    </Stack.Navigator>

  )
} 



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: true}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <Provider theme={theme}>
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  </Provider>
  )
} 
 

console.disableYellowBox = true;