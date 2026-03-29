import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LIGHT_COLORS, DARK_COLORS } from "../constants/theme";

export type Theme = "light" | "dark";

interface ThemeStore {
	theme: Theme;
	colors: typeof LIGHT_COLORS;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
	persist(
		(set, get) => ({
			theme: "light",
			colors: LIGHT_COLORS,

			setTheme: (theme: Theme) => {
				// Update document class for Tailwind dark: prefix support
				if (theme === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}

				// Update state
				set({
					theme,
					colors: theme === "dark" ? DARK_COLORS : LIGHT_COLORS,
				});
			},

			toggleTheme: () => {
				const current = get().theme;
				const next = current === "light" ? "dark" : "light";
				get().setTheme(next);
			},
		}),
		{
			name: "theme-store", // localStorage key
			partialize: (state) => ({ theme: state.theme }), // Only persist theme, not colors
		},
	),
);

// Helper hook to get current colors
export const useThemeColors = () => useThemeStore((state) => state.colors);
export const useTheme = () => useThemeStore((state) => state.theme);
