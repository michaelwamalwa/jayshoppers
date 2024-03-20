// OurServicesScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OurServicesScreen = () => {
  const [services, setServices] = useState([
    // Static data for demonstration; replace with your API call
    { id: '1', title: 'Web Development', description: 'Building responsive and high-performance websites.', image: 'web_dev_image_url' },
    { id: '2', title: 'Mobile App Development', description: 'Creating mobile applications that stand out.', image: 'mobile_app_dev_image_url' },
    // Add more services as needed
  ]);

  // If fetching from an API:
  // useEffect(() => {
  //   fetchServices().then(data => setServices(data));
  // }, []);

  return (
  <Text>
    Hi
  </Text>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  // Additional styles as needed
});

export default OurServicesScreen;
