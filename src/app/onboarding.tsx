import React, { useState } from "react";
import { images } from "@/constants/images";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import {
  usePreferencesStore,
  ContentCategory,
} from "@/store/preferencesStore";
import { useAuth } from "@clerk/clerk-expo";

const categories: ContentCategory[] = [
  "Tech",
  "Business",
  "Art",
  "General",
];

export default function OnboardingScreen() {
  const router = useRouter();
  const { setCategories, categories: selected } =
    usePreferencesStore();
  const [tempSelection, setTempSelection] =
    useState<ContentCategory[]>(selected);
  const { isSignedIn } = useAuth();

  const toggle = (cat: ContentCategory) => {
    setTempSelection((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat],
    );
  };

  const submit = () => {
    setCategories(tempSelection);
    router.replace("/(tabs)/home");
  };

  // If already signed in and preferences exist, skip onboarding
  if (isSignedIn && selected.length > 0) {
    router.replace("/(tabs)/home");
    return null;
  }

  return (
    <ScrollView className="flex-1 p-4 bg-white">
      <View className="flex-1 bg-[#F8F9FB] px-6 pt-10">
        <View className="absolute top-16 left-6 h-24 w-24 rounded-full bg-[#D9F8FF]/70" />
        <View className="absolute top-8 right-10 h-16 w-16 rounded-full bg-[#CCFF00]/20" />
        <View className="absolute bottom-28 left-8 h-3 w-3 rounded-full bg-[#8BD8FF]" />
        <View className="absolute bottom-20 right-16 h-4 w-4 rounded-full bg-[#A7E1FF]" />

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="rounded-full bg-white p-2 shadow-card">
              <Image
                source={images.brandLogo}
                className="h-10 w-10"
              />
            </View>
            <Text className="text-h4 text-[#0A192F] font-semibold">
              MindGym
            </Text>
          </View>
        </View>

        <View className="mt-12 items-center">
          <View className="relative items-center justify-center">
            <View className="absolute -inset-6 rounded-full bg-[#ECFFF8]" />
            <View className="rounded-full bg-white p-8 shadow-card">
              <Image
                source={images.welcomeMascot}
                className="size-36"
              />
            </View>
            <View className="absolute right-0 bottom-0 rounded-full bg-[#CCFF00] px-4 py-2 shadow-card">
              <Text className="text-body-xs text-primary">
                LEVEL 1: ROOKIE
              </Text>
            </View>
          </View>
        </View>

        <Text className="text-h2 mt-10 text-center">
          Meet your Game Master
        </Text>
        <Text className="mt-4 text-body-md leading-7 text-[#687280]">
          Welcome to the playground! I’ll be your guide through
          challenges designed to flex your mental muscles.
        </Text>

        <Text className="text-2xl font-bold mb-4">
          Select Your Content Categories
        </Text>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => toggle(cat)}
            className={`p-4 border rounded mb-2 flex-row items-center ${
              tempSelection.includes(cat)
                ? "bg-blue-100 border-blue-500"
                : "bg-gray-100"
            }`}
          >
            <Text className="text-lg">{cat}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={submit}
          disabled={tempSelection.length === 0}
          className={`mt-4 p-4 rounded bg-blue-600 ${
            tempSelection.length === 0 ? "opacity-50" : ""
          }`}
        >
          <Text className="text-center text-white font-semibold">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

{
  /* */
}
