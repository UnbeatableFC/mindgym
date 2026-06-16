import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

export default function Splash() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F8F9FB]">
      <Image
        source={images.logoGlow}
        className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 opacity-70"
      />
      <ScrollView
        contentContainerClassName="flex-1 justify-center px-6 py-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="relative rounded-[36px] bg-white px-6 py-8 shadow-card">
          <View className="items-center">
            <View className="mb-6 rounded-full bg-[#F7FDF4] p-5">
              <Image source={images.welcomeMascot} className="size-72" />
            </View>
            <Text className="text-h1 font-semibold text-primary">MindGym</Text>
            <Text className="mt-3 text-center text-body-md text-[#687280]">
              Where mental exercise feels like play.
            </Text>
          </View>

          <View className="mt-8 flex-row flex-wrap justify-center gap-3">
            <View className="rounded-full bg-[#F8FFCC] px-4 py-2">
              <Text className="text-body-sm font-semibold text-[#0A192F]">Logic</Text>
            </View>
            <View className="rounded-full bg-[#E8F5FF] px-4 py-2">
              <Text className="text-body-sm font-semibold text-[#0A192F]">Lateral</Text>
            </View>
            <View className="rounded-full bg-[#F3F4F7] px-4 py-2">
              <Text className="text-body-sm font-semibold text-[#0A192F]">Divergent</Text>
            </View>
          </View>

          <Pressable
            onPress={() => router.push("/onboarding")}
            // className="mt-10 rounded-[32px] bg-[#CCFF00] px-6 py-4 items-center"
            className="btn-primary"
          >
            <Text className="text-body-lg font-semibold text-white/70">
              Get Started →
            </Text>
          </Pressable>

          <Text className="mt-5 text-center text-caption text-[#687280]">
            Join over 50,000 creative professionals
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
