export const COLORS = {
  primary: "#4648d4",
  primaryContainer: "#6063ee",
  primaryFixed: "#e1e0ff",
  onPrimary: "#ffffff",
  onPrimaryContainer: "#fffbff",
  background: "#fcf8ff",
  surface: "#fcf8ff",
  surfaceContainer: "#efecf8",
  surfaceContainerLow: "#f5f2fe",
  surfaceContainerHigh: "#e9e6f3",
  surfaceContainerHighest: "#e4e1ed",
  surfaceContainerLowest: "#ffffff",
  onSurface: "#1b1b23",
  onSurfaceVariant: "#464554",
  onBackground: "#1b1b23",
  outline: "#767586",
  error: "#ba1a1a",
  errorContainer: "#ffdad6",
  onError: "#ffffff",
  uiStroke: "#1E293B",
  uiPaper: "#FFFBEB",
  statusIncome: "#2DD4BF",
  groupCampus: "#60A5FA",
  groupBoarding: "#4ADE80",
  groupFood: "#FB923C",
  groupPersonal: "#A78BFA",
};

export const FONTS = {
  headlineLg: { fontFamily: "System", fontSize: 32, fontWeight: "800" as const, letterSpacing: -0.02 },
  headlineLgMobile: { fontFamily: "System", fontSize: 28, fontWeight: "800" as const },
  headlineMd: { fontFamily: "System", fontSize: 24, fontWeight: "700" as const },
  headlineSm: { fontFamily: "System", fontSize: 20, fontWeight: "700" as const },
  bodyLg: { fontFamily: "System", fontSize: 18, fontWeight: "500" as const },
  bodyMd: { fontFamily: "System", fontSize: 16, fontWeight: "400" as const },
  labelLg: { fontFamily: "System", fontSize: 14, fontWeight: "700" as const },
  labelSm: { fontFamily: "System", fontSize: 12, fontWeight: "600" as const },
};

export const SHADOWS = {
  sticker: {
    shadowColor: "#1E293B",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  stickerSm: {
    shadowColor: "#1E293B",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
  },
};

export const BORDER = {
  width: 2.5,
  color: "#1E293B",
  radius: { sm: 4, md: 8, lg: 12, xl: 16, full: 9999 },
};
