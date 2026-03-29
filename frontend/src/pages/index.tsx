import React from "react";
import MenuBar from "../tools/MenuBar";
import Dashboard from "../components/Dashboard";
import Footer from "../tools/Footer";

const Home: React.FC = () => {
	return (
		<>
			<MenuBar />
			<main className="min-h-screen bg-gray-50 pt-10">
				<Dashboard />
			</main>
			<Footer />
		</>
	);
};
export default Home;
