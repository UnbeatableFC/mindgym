import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignUp, useSSO } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import * as AuthSession from 'expo-auth-session'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignUp() {
  const router = useRouter();
  const { isLoaded, setActive, signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSentCode, setHasSentCode] = useState(false);
  const { startSSOFlow } = useSSO()

  

  const handleGoogleSignIn = useCallback(async () => {
    try {
      
      
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl: AuthSession.makeRedirectUri({
          scheme: "mindgym", // Recommended for Expo Go
        }),
      })

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId })
        router.replace("/")
      } else if (signIn || signUp) {
        // Handle existing user (signIn) or new user (signUp)
        router.replace("/")
      }
    } catch (error: unknown) {
      const message =
        error && typeof error === "object" && "message" in error
          ? (error as { message: string }).message
          : "Unable to sign in with Google."
      console.error(message)
    }
  }, [router,startSSOFlow])

  const handleAppleSignIn = useCallback(async () => {
    try {
  
      
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_apple',
        redirectUrl: AuthSession.makeRedirectUri({
          scheme: "mindgym",  // Recommended for Expo Go
        }),
      })

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId })
        router.replace("/")
      } else if (signIn || signUp) {
        router.replace("/")
      }
    } catch (error: unknown) {
      const message =
        error && typeof error === "object" && "message" in error
          ? (error as { message: string }).message
          : "Unable to sign in with Apple."
      console.error(message)
    }
  }, [router,startSSOFlow])

  const handleSignUp = async () => {
    setAuthError("");

    if (!email) {
      setAuthError("Enter your email.");
      return;
    }

    if (!isLoaded) {
      setAuthError("Auth is not ready yet.");
      return;
    }

    setIsLoading(true);
try {
  // Create the sign-up - this throws on error, doesn't return { error: ... }
  await signUp.create({
    emailAddress: email,
  });

  // Send verification code - use prepareEmailAddressVerification instead of sendEmailCode
  await signUp.prepareEmailAddressVerification({
    strategy: 'email_code'
  });

  setHasSentCode(true);
  setModalVisible(true);
} catch (error: unknown) {
  const message =
    error && typeof error === "object" && "message" in error
      ? (error as { message: string }).message
      : "Unable to send verification code.";
  setAuthError(message);
} finally {
  setIsLoading(false);
}
  };

    const handleVerifyCode = async (code: string) => {
    setAuthError("");
    setIsLoading(true);

      if (!isLoaded) return

   try {
  // Verify the email code - correct method name is attemptEmailAddressVerification
  const result = await signUp?.attemptEmailAddressVerification({
    code
  });

  // Check if verification is complete and activate the session
  if (signUp.status === 'complete' && result.createdSessionId) {
    await setActive({ session: result.createdSessionId });
  }

  setModalVisible(false);
  router.replace("/");
} catch (error: unknown) {
  const message =
    error && typeof error === "object" && "message" in error
      ? (error as { message: string }).message
      : "Unable to verify the code.";
  setAuthError(message);
} finally {
  setIsLoading(false);
}
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#F8F9FB]"
    >
      <ScrollView
        contentContainerClassName={`flex-1 justify-center px-6 py-10 ${modalVisible === true ? "opacity-30 bg-gray-800" : ""}`}
        showsVerticalScrollIndicator={false}
      >
        <View className="relative rounded-4xl bg-white px-6 py-8 shadow-card">
          <View className="items-center">
            <View className="mb-6 rounded-full bg-[#F7FDF4] p-4">
              <Image
                source={images.welcomeMascot}
                className="h-12 w-12"
              />
            </View>
            <Text className="text-h2 font-semibold text-[#0A192F]">
              Join the Playground
            </Text>
            <Text className="mt-3 text-center text-body-md text-[#687280]">
              Unlock your creative potential.
            </Text>
          </View>

          <View className="mt-8 space-y-4">
            {/* Email Container */}
            <Text className="text-body-sm font-semibold text-[#687280] ml-3">
              Email
            </Text>
            <View className="rounded-3xl border border-[#E5E7EB] bg-[#F8F9FB] px-4 py-1">
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="name@domain.com"
                placeholderTextColor="#A3ADC8"
                keyboardType="email-address"
                autoCapitalize="none"
                // Remove mt-3 (margin-top) to tighten the gap between label and input
                className="text-body-md text-[#0A192F] h-11.5"
              />
            </View>
          </View>

          <Pressable
            onPress={handleSignUp}
            disabled={isLoading}
            className={`mt-8 rounded-3xl bg-[#CCFF00] px-6 py-4 items-center ${isLoading ? "opacity-50" : ""}`}
          >
            <Text className="text-body-lg font-semibold text-[#0A192F]">
              Sign Up →
            </Text>
          </Pressable>

          {authError ? (
            <Text className="mt-4 text-center text-body-sm text-red-500">
              {authError}
            </Text>
          ) : null}

          <View className="mt-6 flex-row items-center justify-center gap-2">
            <View className="h-px flex-1 bg-[#E5E7EB]" />
            <Text className="text-body-sm text-[#687280]">OR</Text>
            <View className="h-px flex-1 bg-[#E5E7EB]" />
          </View>

          <View className="mt-6 space-y-3">
            <Pressable className="rounded-3xl border border-[#E5E7EB] bg-white px-5 py-4 flex-row items-center justify-center gap-3"
            onPress={handleGoogleSignIn}>
              <View className="h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F7]">
                <Ionicons
                  name="logo-google"
                  size={18}
                  color="#4285F4"
                />
              </View>
              <Text className="text-body-sm text-[#0A192F]">
                Sign up with Google
              </Text>
            </Pressable>

            <Pressable className="rounded-3xl mt-3 bg-[#0A192F] px-5 py-4 flex-row items-center justify-center gap-3"
             onPress={handleAppleSignIn}>
              <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
                <Ionicons
                  name="logo-apple"
                  size={18}
                  color="#0A192F"
                />
              </View>
              <Text className="text-body-sm font-semibold text-white">
                Sign up with Apple
              </Text>
            </Pressable>
          </View>

          <View className="mt-8 flex-row justify-center gap-2">
            <Text className="text-body-sm text-[#687280]">
              Already have an account?
            </Text>
            <Pressable onPress={() => router.push("/sign-in")}>
              <Text className="text-body-sm font-semibold text-[#0A192F]">
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <VerificationModal
        key={modalVisible ? "open" : "closed"}
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
        onComplete={handleVerifyCode}
      />
    </KeyboardAvoidingView>
  );
}
