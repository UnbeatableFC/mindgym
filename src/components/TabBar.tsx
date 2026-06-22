import React, { useMemo, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const TAB_MAP = {
  Today: "/(tabs)",
  Community: "/(tabs)/community",
  Progress: "/(tabs)/progress",
  Profile: "/(tabs)/profile",
} as const;

type TabName = keyof typeof TAB_MAP;

const TAB_ITEMS: {
  name: TabName;
  icon: keyof typeof FontAwesome5.glyphMap;
}[] = [
  { name: "Today", icon: "home" },
  { name: "Community", icon: "users" },
  { name: "Progress", icon: "chart-bar" },
  { name: "Profile", icon: "user" },
];

function getTabNameFromPath(path: string): TabName {
  if (path.includes("/community")) return "Community";
  if (path.includes("/progress")) return "Progress";
  if (path.includes("/profile")) return "Profile";
  return "Today";
}

export default function TabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeTab = getTabNameFromPath(pathname);

  // Animated values for each tab's circle scale and opacity
  const animatedValues = useMemo(() => {
    const values: Record<
      TabName,
      { scale: Animated.Value; opacity: Animated.Value }
    > = {
      Today: {
        scale: new Animated.Value(0),
        opacity: new Animated.Value(0),
      },
      Community: {
        scale: new Animated.Value(0),
        opacity: new Animated.Value(0),
      },
      Progress: {
        scale: new Animated.Value(0),
        opacity: new Animated.Value(0),
      },
      Profile: {
        scale: new Animated.Value(0),
        opacity: new Animated.Value(0),
      },
    };
    return values;
  }, []);

  useEffect(() => {
    TAB_ITEMS.forEach((item) => {
      const isActive = item.name === activeTab;

      Animated.parallel([
        Animated.spring(animatedValues[item.name].scale, {
          toValue: isActive ? 1 : 0,
          friction: 6,
          tension: 80,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValues[item.name].opacity, {
          toValue: isActive ? 1 : 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [activeTab, animatedValues]);

  const handlePress = (tabName: TabName) => {
    if (tabName !== activeTab) {
      router.push(TAB_MAP[tabName] as any);
    }
  };

  return (
    <View className="flex-row justify-around items-center bg-white border-t border-gray-200 pt-3 pb-5">
      {TAB_ITEMS.map((item) => {
        const isActive = item.name === activeTab;

        return (
          <TouchableOpacity
            key={item.name}
            onPress={() => handlePress(item.name)}
            className="items-center justify-center flex-1 relative"
            activeOpacity={0.7}
          >
            {/* Animated circular background (active only) */}
            <Animated.View
              style={{
                position: "absolute",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "#38a169",
                transform: [
                  { scale: animatedValues[item.name].scale },
                ],
                opacity: animatedValues[item.name].opacity,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#38a169",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 5,
              }}
            />

            {/* Icon - always visible, white when active */}
            <FontAwesome5
              name={item.icon}
              size={20}
              color={isActive ? "#ffffff" : "#9ca3af"}
              solid={isActive}
              style={{ zIndex: 1 }}
            />

            {/* Label - hidden when active, visible when inactive */}
            <Animated.Text
              className={`text-xs font-medium mt-1 ${
                isActive ? "text-transparent" : "text-gray-400"
              }`}
              style={{
                opacity: isActive ? 0 : 1,
                height: isActive ? 0 : undefined,
              }}
            >
              {item.name}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
