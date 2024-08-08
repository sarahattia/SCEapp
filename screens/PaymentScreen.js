import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const exampleAddresses = [
  {
    id: '1',
    name: 'Hatzionut 21, Ashdod, Israel',
    coordinate: { latitude: 31.7851172, longitude: 34.6409275 },
    available: true,
    size: 'car',
    option: 'true',
  },
  {
    id: '2',
    name: 'Nahal Lahish 45, Ashdod, Israel',
    coordinate: { latitude: 31.787025, longitude: 34.6337443 },
    available: true,
    size: 'motorcycle',
    option: 'true',
  },
  {
    id: '3',
    name: 'Kineret 59, Ashdod, Israel',
    coordinate: { latitude: 31.7797933, longitude: 34.6289904 },
    available: true,
    size: 'car',
    option: 'true',
  },  
];

const PaymentScreen = ({navigation,route}) => {
  const { selectedAddress } = route.params; 

  if (!selectedAddress) {
    return (
      <View style={styles.container}>
        <Text>No address selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Selected Address:</Text>
      <Text>{selectedAddress.name}</Text>
      <Text>
        {selectedAddress.coordinate.latitude}, {selectedAddress.coordinate.longitude}
      </Text>
      {/* Affichez les autres détails de selectedAddress si nécessaire */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// test 

export default PaymentScreen;
