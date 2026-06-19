import {
  ClerkLoaded,
  ClerkProvider,
  useAuth,
} from "@clerk/clerk-expo";
import { useAppFonts } from "@/lib/useAppFonts";
import { Stack, useRouter, useSegments } from "expo-router";
import { Text, View } from "react-native";
import { tokenCache } from "@/lib/token-cache";
import { useEffect } from "react";
import "../../global.css";
import { usePreferencesStore } from "@/store/preferencesStore";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { categories } = usePreferencesStore();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (isSignedIn && inAuthGroup) {
      // Redirect to home if signed in and in auth screens
      router.replace("/(tabs)/home");
    } 
    else if(isSignedIn && categories.length === 0) {
       router.replace('/onboarding');
    }
    else if (
      !isSignedIn &&
      !inAuthGroup &&
      segments[0] !== "splash" 
    ) {
      // Redirect to onboarding if not signed in and not in auth screens
      // As per prompt: redirect to onboarding route (/splash)
      router.replace("/(auth)/sign-in");
    }
  }, [isSignedIn, isLoaded, router, segments, categories]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) {
    return (
      <View className="flex-1 bg-background">
        <Text>Font not loaded</Text>
      </View>
    );
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      tokenCache={tokenCache}
    >
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
}

