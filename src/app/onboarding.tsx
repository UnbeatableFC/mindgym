import { Image, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

export default function Onboarding() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F8F9FB] px-6 pt-10">
      <View className="absolute top-16 left-6 h-24 w-24 rounded-full bg-[#D9F8FF]/70" />
      <View className="absolute top-8 right-10 h-16 w-16 rounded-full bg-[#CCFF00]/20" />
      <View className="absolute bottom-28 left-8 h-3 w-3 rounded-full bg-[#8BD8FF]" />
      <View className="absolute bottom-20 right-16 h-4 w-4 rounded-full bg-[#A7E1FF]" />

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <View className="rounded-full bg-white p-2 shadow-card">
            <Image source={images.brandLogo} className="h-10 w-10" />
          </View>
          <Text className="text-h4 text-[#0A192F] font-semibold">
            MindGym
          </Text>
        </View>
        <Pressable onPress={() => router.push("/")}>
          <Text className="text-body-sm text-[#687280]">Skip</Text>
        </Pressable>
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

      <View className="mt-8 flex-row flex-wrap justify-center gap-3">
        <View className="rounded-full bg-[#F8FFCC] px-4 py-2">
          <Text className="text-body-sm font-semibold text-[#0A192F]">
            Logic Gates
          </Text>
        </View>
        <View className="rounded-full bg-[#E8F5FF] px-4 py-2">
          <Text className="text-body-sm font-semibold text-[#0A192F]">
            Lateral Jumps
          </Text>
        </View>
        <View className="rounded-full bg-[#F3F4F7] px-4 py-2">
          <Text className="text-body-sm font-semibold text-[#0A192F]">
            Divergent Flux
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => router.push("/")}
        className="btn-primary"
      >
        <Text className="text-body-lg font-semibold text-white/80">
          Next →
        </Text>
      </Pressable>
    </View>
  );
}
