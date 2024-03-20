import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'; // Import Dimensions here
import { getProducts } from '../services/ProductServices.js';
import { Product } from "../components/Product";
import Carousel from "react-native-snap-carousel";

import image1 from "../assets/carousel/about.jpg";
import image2 from "../assets/carousel/login.jpg";
import image3 from "../assets/carousel/register.jpg";

const carouselItems = [
    {
        title: "Item 1",
        image: image1,
    },
    {
        title: "Item 2",
        image: image2,
    },
    {
        title: "Item 3",
        image: image3,
    },
]
const { width: screenWidth } = Dimensions.get('window');

export const ProductsList = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await getProducts();
            console.log(productList);
            setProducts(productList);
        };

       fetchProducts();
    }, []);

    function renderProduct({ item: product }) {
        return (
            <Product 
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', { productId: product.id })
                }}
            />
        );
    }

    const renderCarouselItem = ({ item }) => {
        return (
            <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
          
        </View>
        );
    };

    return (
        <>
        <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>JAY SHOPPERS</Text>
        <View style={styles.navbarMenu}>
        <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navbarItem}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OurTeam')}>
          <Text style={styles.navbarItem}>Our Team</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
            <View style={{ flex: 1}}>
                <Carousel 
                    data={carouselItems} 
                    renderItem={renderCarouselItem}
                    sliderWidth={screenWidth}
                    itemWidth={300} // Adjust based on your design
                    loop // Enables looping of carousel
                />
            </View>
            <View style={{ flex: 2 }}>
            <FlatList 
                style={styles.productsList}
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                renderItem={renderProduct} 
            />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        height: 60, 
        paddingHorizontal: 10,
        backgroundColor: 'grey', 
      },
      navbarTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      navbarMenu: {
        flexDirection: 'row', 
    },
    navbarItem: {
        color: '#ffffff',
        marginLeft: 15, 
    },
    carouselItems: {
       width: 100,
       height: 100,
       justifyContent: 'center',
       alignItems: 'center',
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
    Container: {
        textAlign: 'center',
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    productsList: {
        backgroundColor: '#fff',
    },
    productsListContainer: {
        paddingHorizontal: 10, 
        paddingTop: 10,  
    },
});
