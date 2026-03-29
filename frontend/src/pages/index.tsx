import React, { useMemo } from "react";
import MenuBar from "../tools/MenuBar";
import Dashboard from "../components/Dashboard";
import Footer from "../tools/Footer";
import { useTheme } from "../stores/themeStore";

const Home: React.FC = () => {
	const theme = useTheme();

	const bgColor = useMemo(() => {
		return theme === "dark" ? "#0f172a" : "#f8f7ff";
	}, [theme]);

	return (
		<div
			className="min-h-screen flex flex-col transition-colors duration-300"
			style={{ background: bgColor }}>
			<MenuBar />
			<main className="flex-1 pt-10">
				<Dashboard />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
