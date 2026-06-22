import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => <TabBar />}
    >
      <Tabs.Screen name="home" options={{ title: "Today" }} />
      <Tabs.Screen
        name="community"
        options={{ title: "Community" }}
      />
      <Tabs.Screen name="progress" options={{ title: "Progress" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
