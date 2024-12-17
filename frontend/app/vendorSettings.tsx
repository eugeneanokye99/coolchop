import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router, Router } from 'expo-router';

const VendorSettings = () => {
 

  const handleNavigation = (page) => {
    router.navigate(page); 
  };

  return (
    <View style={styles.container}>
      
      {/* About Coolchop Section */}
      <TouchableOpacity style={styles.item} onPress={()=> handleNavigation("vendorProfile")}>
        <Text style={styles.text}>Profile</Text>
        <Ionicons name="arrow-forward" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>

      {/* Account and data Section */}
      <TouchableOpacity style={styles.item} onPress={() => handleNavigation('VendorNotifications')}>
        <Text style={styles.text}>Notifications Settings</Text>
        <Ionicons name="arrow-forward" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>

     

      {/* Payments and Pricing Section */}
      <TouchableOpacity style={styles.item} onPress={() => handleNavigation('VendorPayments')}>
        <Text style={styles.text}>Social Media</Text>
        <Ionicons name="arrow-forward" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>

      {/* Pricing Section */}
      <TouchableOpacity style={styles.item} onPress={() => handleNavigation('Pricing')}>
        <Text style={styles.text}>Password</Text>
        <Ionicons name="arrow-forward" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align items to the left
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    justifyContent: 'space-between', // Ensure the icon goes to the far right
    width: '100%',
  },
  text: {
    fontSize: 18,
  },
  icon: { 
    marginLeft: 10,
  },
});

export default VendorSettings;