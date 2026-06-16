import { useAppFonts } from "@/lib/useAppFonts";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) {
    return <View className="flex-1 bg-background" >
      <Text>Font not loaded</Text>
    </View>;
  }

  return <Stack screenOptions={{
    headerShown: false
  }} />;
}
