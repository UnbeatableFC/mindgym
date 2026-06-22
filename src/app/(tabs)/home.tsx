import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { usePreferencesStore } from '@/store/preferencesStore';
import { useAuth } from '@clerk/clerk-expo';
import { katas } from '@/data/katas';


export default function HomeScreen() {
  const { reset,categories } = usePreferencesStore();
  const { signOut } = useAuth();

  // const selectedKata = katas.find((k) => categories.includes(k.category));
  const handleReset = async () => {
    await reset();
  };

  const handleSignOut = async () => {
  try {
    await signOut();
  } catch (err) {
    console.error('Sign out failed:', err);
  }
};

  return (
    <ScrollView className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Home</Text>
      {/* Existing home UI components go here */}

      

      <TouchableOpacity
        onPress={handleReset}
        className="mt-4 p-4 bg-red-600 rounded"
      >
        <Text className="text-center text-white font-semibold">
          Reset Preferences (Dev)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSignOut}
        className="mt-4 p-4 bg-red-600 rounded"
      >
        <Text className="text-center text-white font-semibold">
          Sign Out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}