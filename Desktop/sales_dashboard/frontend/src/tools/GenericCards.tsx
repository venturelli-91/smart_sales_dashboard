import React from "react";
import { Card } from "flowbite-react";

interface CardProps {
	title: string;
	description: string;
}

const GenericCard: React.FC<CardProps> = ({ title, description }) => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500 hover:cursor-pointer">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300">
					{title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400 transition-all duration-300">
					{description}
				</p>
			</Card>
		</div>
	);
};

export default GenericCard;
