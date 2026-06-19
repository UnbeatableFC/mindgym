import { useRouter } from "expo-router";
import {
  ScrollView,
} from "react-native";
import Splash from "./splash";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-[#F8F9FB]"
      contentContainerClassName="flex-1 justify-center px-6 py-10"
      showsVerticalScrollIndicator={false}
    >
      <Splash />
    </ScrollView>
  );
}


