import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../CartContent';

export const CartIcon = () => {
const {getItemsCount} = useContext(CartContext);
const navigation = useNavigation();
return (


<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Cart')} activeOpacity={0.7}>
        <Text style={styles.text} >
            Cart ({getItemsCount()})
        </Text>
    </TouchableOpacity>

   
)
}

const styles = StyleSheet.create({
   container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 42,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
   },
   text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
   }
})