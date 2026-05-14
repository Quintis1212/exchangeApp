export const colors = {
  background: "#0f0f23",
  surface: "#1a1a3e",
  border: "#2a2a4a",
  primary: "#4fc3f7",
  textPrimary: "#ffffff",
  textSecondary: "#666688",
  textMuted: "#444466",
  textLabel: "#e0e0ff",
  error: "#ff6b6b",
  positive: "#4caf50",
  negative: "#f44336",
  chipActive: "#4fc3f7",
  chipActiveText: "#0f0f23",
  chipInactiveText: "#888899",
} satisfies Record<string, string>;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} satisfies Record<string, number>;

export const radius = {
  sm: 8,
  md: 12,
  full: 20,
} satisfies Record<string, number>;

export const fontSizes = {
  xs: 12,
  sm: 13,
  caption: 14,
  body: 15,
  bodyLg: 16,
  title: 17,
  titleLg: 18,
  heading: 26,
} satisfies Record<string, number>;

export const fontWeights = {
  regular: "400",
  semibold: "600",
  bold: "700",
} satisfies Record<string, string>;
