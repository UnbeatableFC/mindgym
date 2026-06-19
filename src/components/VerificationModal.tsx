import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
  onComplete: (code: string) => void;
};

export function VerificationModal({
  visible,
  email,
  onClose,
  onComplete,
}: VerificationModalProps) {
  const [code, setCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (visible) {
      setCode(["", "", "", "", "", ""]);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 150);
    }
  }, [visible]);

  useEffect(() => {
    if (code.every((digit) => digit.length === 1)) {
      onComplete(code.join(""));
    }
  }, [code, onComplete]);

  const handleChange = (value: string, index: number) => {
    if (value === "") {
      const next = [...code];
      next[index] = "";
      setCode(next);
      return;
    }

    if (!/^[0-9]$/.test(value)) {
      return;
    }

    const next = [...code];
    next[index] = value;
    setCode(next);

    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      code[index] === "" &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
    >
      <Pressable
        className="absolute inset-0 bg-black/30"
        style={{}}
        onPress={onClose}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <View className="mx-6 mb-8 rounded-4xl bg-white px-6 py-7 shadow-card">
          <View className="flex-row items-center justify-between">
            <Text className="text-h3 font-semibold text-[#0A192F]">
              Verify Email
            </Text>
            <Pressable onPress={onClose} className="rounded-full p-2">
              <Text className="text-body-sm text-[#687280]">
                Close
              </Text>
            </Pressable>
          </View>

          <Text className="mt-4 text-body-md leading-7 text-[#687280]">
            Check your email for a 6-digit verification code. Enter it
            below to continue.
          </Text>
          <Text className="mt-2 text-body-sm text-[#687280]">
            Sent to {email || "your email"}
          </Text>

          <View className="mt-8 flex-row justify-between px-2">
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                value={digit}
                onChangeText={(value) => handleChange(value, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                keyboardType="number-pad"
                maxLength={1}
                returnKeyType="done"
                autoFocus={index === 0}
                style={styles.input}
              />
            ))}
          </View>

          <Text className="mt-4 text-center text-body-sm text-[#687280]">
            The app will continue automatically once all digits are
            entered.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 56, // h-14 (14 * 4 = 56)
    width: 48, // w-12 (12 * 4 = 48)
    borderRadius: 16, // rounded-2xl
    borderWidth: 1, // border
    borderColor: "#E5E7EB",
    textAlign: "center", // text-center
    fontSize: 20, // Replaces text-h3 (adjust as needed)
    fontWeight: "600", // font-semibold
    color: "#0A192F", // text-[#0A192F]
  },
});
