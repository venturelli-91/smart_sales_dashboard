import React from "react";
import GenericCard from "../tools/GenericCards";
import Sidebar from "../tools/Sidebar";
const Home: React.FC = () => {
	return (
		<>
			<Sidebar />
			<GenericCard
				title="Card 1"
				description="This is a description"
			/>
		</>
	);
};

export default Home;
