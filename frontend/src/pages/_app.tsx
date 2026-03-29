import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import ThemeProvider from "../components/ThemeProvider";
import { useThemeStore } from "../stores/themeStore";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Initialize theme from localStorage on mount
		const savedTheme = localStorage.getItem("theme-store");
		if (savedTheme) {
			const parsed = JSON.parse(savedTheme);
			const { state } = parsed;
			if (state?.theme) {
				useThemeStore.getState().setTheme(state.theme);
			}
		}
	}, []);

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
