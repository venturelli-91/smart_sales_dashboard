import React from "react";
import MenuBar from "../tools/MenuBar";
import Dashboard from "../components/Dashboard";
import Footer from "../tools/Footer";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col" style={{ background: "#f8f7ff" }}>
			<MenuBar />
			<main className="flex-1 pt-10">
				<Dashboard />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
