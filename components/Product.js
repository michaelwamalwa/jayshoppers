import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export const Product = ({name, price, image, onPress}) => {
    return (
        <>
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image style={styles.image} source={image} />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    </TouchableOpacity>
    </>
    )
};

const styles = StyleSheet.create({
    card: {
        elevation: 2, // Shadow for Android
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200, // Adjust the height as needed
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        color: '#666',
    },
});
