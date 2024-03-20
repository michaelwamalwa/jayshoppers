import React, { useEffect, useState, useContext } from 'react';
import {View, Image, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {CartContext} from '../CartContent';
import { useNavigation } from '@react-navigation/native';
// Utility function to format price as currency
function formatPrice(price) {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(price);
  }

export const Cart = () => {
   const navigation = useNavigation();
    const {items, getItemsCount, getTotalPrice, removeItemFromCart} = useContext(CartContext);
   function Totals() {
      let [total, setTotal]  = useState(0);
      useEffect(() => {
        setTotal(getTotalPrice())
      })
      return (
        <View style={styles.cartLineTotal}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
            <Text style={styles.mainTotal}>{formatPrice(total)}</Text>
        </View>
      )
   }
   function renderItem ({item}) {
    

     return (
        <>
        <View style={styles.cartLine}>
            <Image style ={styles.image} source={item.product.image} />
            <Text style={styles.lineLeft}>
                {item.product.name} x {item.qty} 
                <Text style={styles.productTotal}>{formatPrice(item.totalPrice)}</Text>
                </Text>
              
        </View>
        <TouchableOpacity onPress={() => removeItemFromCart(item.product.id)}  style={styles.removeButton}>
                 <Text style={styles.removeButtonText}> Clear
                    </Text>  
                 </TouchableOpacity>
        </>
     )
   }
   return (
    <>
<FlatList
  style={styles.itemsList}
  contentContainerStyle={styles.itemsListContainer}
  data={items}
  renderItem={renderItem}
  keyExtractor={(item) => item.product.id.toString()}
  ListFooterComponent={Totals}
 />

<View style={styles.checkoutButtonContainer}>
  <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.checkoutButton}>
    <Text style={styles.checkoutButtonText}>Checkout</Text>
    </TouchableOpacity>
        </View>
</>
   )
}

const styles = StyleSheet.create({
    cartLine: {
        flexDirection: 'row',
        width: '80%',
        paddingVertical: 10
    },
    image: {
        width: '25%',
        aspectRatio: 1,
        marginRight: 5
    },
    cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
    },
    productTotal: {
        fontWeight: 'bold',
    },
    lineLeft: {
        fontSize: 20,
        lineHeight: 40,
        color: '#333333'
    },
    lineRight: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'left'
    },
    mainTotal: {
        flex: 1,
        fontSize: 20,
        lineHeight: 40,
        color: '#333333',
        textAlign: 'right'
    },
    itemsList: {
        backgroundColor: '#eeeeee',
    },
    itemsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
    removeButton: {
        marginLeft: 10, // Add margin if needed
        backgroundColor: 'red', // Red background
        paddingHorizontal: 10, // Horizontal padding
        paddingVertical: 5, // Vertical padding
        borderRadius: 5, // Rounded corners
    },
    removeButtonText: {
        color: 'white', // White text color
        fontWeight: 'bold', // Bold text
    },
    infoAndRemoveContainer: {
        flexDirection: 'row', // Align info and remove button in a row
        alignItems: 'center', // Center items vertically
        flex: 1, // Take up remaining space
    },
    checkoutButtonContainer: {
        paddingHorizontal: 10, // Horizontal padding for the container
        paddingVertical: 20, // Vertical padding for some spacing from the list
    },
    checkoutButton: {
        backgroundColor: 'green', // Green background for visibility
        alignItems: 'center', // Center the text horizontally
        padding: 15, // Padding for size
        borderRadius: 5, // Rounded corners
    },
    checkoutButtonText: {
        color: 'white', // White text color
        fontWeight: 'bold', // Bold text
        fontSize: 16, // Slightly larger text
    },
})