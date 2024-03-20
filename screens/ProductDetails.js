import React, {useContext, useEffect, useState } from 'react';
import { Text, StyleSheet ,View, Image, ScrollView, SafeAreaView, Button } from 'react-native';
import { getProduct } from '../services/ProductServices';
import { CartContext, CartProvider } from '../CartContent';
export const ProductDetails = ({route}) => {
 
    const {productId} = route.params;
    const [product, setProduct] = useState({});

   const {addItemToCart} = useContext(CartContext)
    useEffect(() => {
        setProduct(getProduct(productId));
    })

    function onAddToCart() {
        addItemToCart(product.id)
    }
    return (
       <SafeAreaView>
        <ScrollView>
            <View style={style.imageContainer}>
                <Image style={style.image} source={product.image} />
            </View>
            <View style= {style.infoContainer}>
               <Text style={style.name}>{product.name}</Text>
               <Text style={style.price}>{product.price}</Text>
               <Text style={style.description}>{product.description}</Text>   
               <Button onPress={onAddToCart} title='ADD TO CART' />
            </View>
        </ScrollView>
       </SafeAreaView>
    )
}

const style = StyleSheet.create({
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }, 
    image: {
        width: "100%",
        height: "undefined",
        aspectRatio:  1
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
    },
    price :{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        color: "#787878",
        marginBottom: "16",
    },
});
