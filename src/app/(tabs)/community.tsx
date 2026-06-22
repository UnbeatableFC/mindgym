import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default CommunityScreen;