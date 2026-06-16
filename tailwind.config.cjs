import { colors, fontFamily } from "./theme";

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        background: colors.background,
        surface: colors.surface,
        border: colors.border,
        text: colors.text,
        muted: colors.textMuted,
        neutral: colors.neutral,
      },
      fontFamily: {
        poppins: [fontFamily.regular],
        "poppins-medium": [fontFamily.medium],
        "poppins-semibold": [fontFamily.semiBold],
        "poppins-bold": [fontFamily.bold],
      },
      boxShadow: {
        card: "0px 12px 24px rgba(10, 25, 47, 0.08)",
      },
      borderRadius: {
        xl: "24px",
      },
      fontSize: {
        h1: [
          "32px",
          { lineHeight: "38px", letterSpacing: "-0.02em" },
        ],
        h2: [
          "24px",
          { lineHeight: "31px", letterSpacing: "-0.01em" },
        ],
        h3: ["20px", { lineHeight: "26px" }],
        h4: ["16px", { lineHeight: "22px" }],
        bodyLg: ["16px", { lineHeight: "26px" }],
        bodyMd: ["14px", { lineHeight: "22px" }],
        bodySm: ["13px", { lineHeight: "20px" }],
        caption: ["11px", { lineHeight: "16px" }],
      },
    },
  },
};

export default config;
