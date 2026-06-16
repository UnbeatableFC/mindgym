import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 bg-surface"
      contentContainerClassName="p-2xl"
    >
      <Text className="text-h1 text-primary mb-4">
        MindGym Design System
      </Text>
      <Text className="text-body-lg text-secondary mb-6">
        This app uses the Poppins font family, the MindGym color
        palette, and custom NativeWind utilities.
      </Text>

      <View className="card-base mb-4 p-xl">
        <Text className="text-h2 text-primary mb-2">Typography</Text>
        <Text className="text-body-lg text-primary mb-1">
          H1 / 32px / Bold
        </Text>
        <Text className="text-body-md text-secondary mb-1">
          H2 / 24px / SemiBold
        </Text>
        <Text className="text-body-md text-secondary mb-1">
          H3 / 20px / SemiBold
        </Text>
        <Text className="text-body-md text-secondary mb-1">
          Body Large / 16px / Regular
        </Text>
        <Text className="text-caption text-secondary">
          Caption / 11px / Regular
        </Text>
      </View>

      <View className="card-base p-xl">
        <Text className="text-h2 text-primary mb-3">Colors</Text>
        <View className="mb-2 rounded-xl bg-[#6c4ef5] p-lg">
          <Text className="text-body-lg text-white">Primary</Text>
        </View>
        <View className="mb-2 rounded-xl bg-[#21c168] p-lg">
          <Text className="text-body-lg text-white">
            Secondary (Success)
          </Text>
        </View>
        <View className="rounded-xl bg-[#ff4c4f] p-lg">
          <Text className="text-body-lg text-white">
            Tertiary (Error)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
