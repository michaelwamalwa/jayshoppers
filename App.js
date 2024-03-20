import React from 'react'
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductList';
import { ProductDetails} from './screens/ProductDetails';
import {Cart} from "./screens/CartContent";
import { CartProvider } from './CartContent';
import { CartIcon } from './components/CartIcon';
import { CheckoutScreen } from './components/CheckoutScreen.js';
import LoginScreen from './components/LoginScreen.js';
import SignupScreen from './components/SignupScreen.js';
import OurServicesScreen from './components/OurServicesScreen.js'; // Update path
import OurTeamScreen from './components/OurTeamScreen.js';


const Stack = createNativeStackNavigator();
export default function App() {

  return(
    <CartProvider>
      <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen 
         name='Products' 
         component={ProductsList} 
         options={({navigation}) => ({
          title: 'Products', 
          headerRight: () => <CartIcon navigation={navigation} />})}  />
      <Stack.Screen 
           name= 'ProductDetails' 
           component={ProductDetails}
           options={({route, navigation}) => ({
           title: route.params.productName || 'Product Details',
           headerRight: () => <CartIcon navigation={navigation} />})} />
      <Stack.Screen 
           name='Cart' 
           component={Cart} 
           options={({navigation}) => ({
           title: 'Your Cart', 
          headerRight: () => <CartIcon navigation={navigation} />
        })} 
        />
      <Stack.Screen 
           name="Checkout" 
           component={CheckoutScreen} 
       />
           <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
           <Stack.Screen name="OurServices" component={OurServicesScreen} options={{ title: 'Sevices' }} />
           <Stack.Screen name="OurTeam" component={OurTeamScreen}  options={{ title: 'Meet The Team' }}/>
           <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'SignUp' }} />
       </Stack.Navigator>
    
  </NavigationContainer>
    </CartProvider> 
  )
}
const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: "center",
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})