import React, { useEffect } from "react";
import { useTheme } from "../stores/themeStore";

interface ThemeProviderProps {
	children: React.ReactNode;
}

/**
 * ThemeProvider - Ensures HTML root gets the 'dark' class when dark mode is active
 * This component must wrap the entire app and listen to theme changes
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const theme = useTheme();

	// Update HTML root class whenever theme changes
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return <>{children}</>;
};

export default ThemeProvider;
