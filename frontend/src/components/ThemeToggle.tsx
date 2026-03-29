import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeStore } from "../stores/themeStore";

const ThemeToggle: React.FC = () => {
	const theme = useThemeStore((state) => state.theme);
	const toggleTheme = useThemeStore((state) => state.toggleTheme);

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={`Alternar para modo ${theme === "light" ? "escuro" : "claro"}`}
			title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
			className="flex items-center justify-center w-10 h-10 rounded-full 
			           bg-white/20 hover:bg-white/30 
			           dark:bg-gray-700 dark:hover:bg-gray-600
			           transition-colors duration-150 
			           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300
			           dark:focus:ring-violet-500">
			{theme === "light" ? (
				<FiMoon size={18} className="text-white dark:text-gray-200" />
			) : (
				<FiSun size={18} className="text-white dark:text-yellow-300" />
			)}
		</button>
	);
};

export default ThemeToggle;
