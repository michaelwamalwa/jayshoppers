import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import payment option icons
import mpesaIcon from '../assets/payments/mpesa.png';
import paypalIcon from '../assets/payments/paypal.png';
import stripeIcon from '../assets/payments/Stripe.png';
import bitcoinIcon from '../assets/payments/bitcoin.png';

export const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentSelection = (paymentType) => {
    setSelectedPayment(paymentType);
    switch (paymentType) {
        case 'mpesa':
        showConfirmation('M-pesa');
        break;
        case 'paypal':
           
            showConfirmation('PayPal');
            break;
          case 'stripe':
       
            showConfirmation('Stripe');
            break;
          case 'bitcoin':
           
            showConfirmation('Bitcoin');
            break;
          default:
            console.log('Unknown payment option selected');
      }
  };
  const showConfirmation = (paymentMethod) => {
    console.log(`Payment Method: ${paymentMethod}`); // Debugging line
    Alert.alert(
      "Payment Method Selected",
      `You have selected ${paymentMethod}. Proceed to the payment?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Payment cancelled"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log(`Proceeding with ${paymentMethod}`) }
      ]
    );
  };
  
  const isSelectedStyle = (paymentType) => ({
    borderColor: selectedPayment === paymentType ? '#000' : '#fff', // Highlight the border of selected payment
    borderWidth: 2,
  });

  return (
     <View style={styles.container}>
      <Text style={styles.instructions}>Select a payment method:</Text>
      <View style={styles.paymentOptions}>
        <TouchableOpacity onPress={() => handlePaymentSelection('M-pesa')}>
          <Image source={mpesaIcon} style={[styles.paymentIcon, isSelectedStyle('M-pesa')]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePaymentSelection('PayPal')}>
          <Image source={paypalIcon} style={[styles.paymentIcon, isSelectedStyle('PayPal')]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePaymentSelection('Stripe')}>
          <Image source={stripeIcon} style={[styles.paymentIcon, isSelectedStyle('Stripe')]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePaymentSelection('Bitcoin')}>
          <Image source={bitcoinIcon} style={[styles.paymentIcon, isSelectedStyle('Bitcoin')]} />
        </TouchableOpacity>
      </View>
      {selectedPayment && (
        <Button
          title="Confirm Payment Method"
          onPress={() => showConfirmation(selectedPayment)}
          color="#f194ff"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    paddingVertical: 20, // Added padding for vertical spacing
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, // Slightly increased font size for better visibility
  },
  paymentOptions: {
    flexDirection: 'row', // Align payment options horizontally
    marginTop: 20, // Add some space between the text and payment options
  },
  paymentIcon: {
    width: 50, // Define a fixed size for icons
    height: 50,
    marginHorizontal: 10, // Add some space between icons
  },
});
