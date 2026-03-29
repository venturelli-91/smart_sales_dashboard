import React from "react";
import { Card } from "flowbite-react";
import { IoTriangle } from "react-icons/io5";
import { GENERIC_CARD_CLASSES } from "../constants/styles";

export interface KPICardProps {
	title: string;
	description: string;
	value: string;
	bgColor?: string;
	textColor?: string;
	trend?: "up" | "down" | "neutral";
}

const GenericCard: React.FC<KPICardProps> = ({
	title,
	description,
	value,
	bgColor = "white",
	textColor = "black",
	trend = "neutral",
}) => {
	const renderTrendIcon = () => {
		if (trend === "up") {
			return <IoTriangle className="text-green-500" />;
		} else if (trend === "down") {
			return <IoTriangle className="text-red-500 transform rotate-180" />;
		}
		return null;
	};

	return (
		<Card
			className={GENERIC_CARD_CLASSES}
			style={{ backgroundColor: bgColor }}>
			<h5
				className="text-2xl font-bold tracking-tight transition-all duration-300"
				style={{ color: textColor }}>
				{title}
			</h5>
			<p
				className="font-bold text-3xl transition-all duration-300"
				style={{ color: textColor }}>
				{value}
			</p>
			<div className="flex items-center gap-2">
				{renderTrendIcon()}
				<p
					className="font-normal text-md transition-all duration-300"
					style={{ color: textColor }}>
					{description}
				</p>
			</div>
		</Card>
	);
};

export default React.memo(GenericCard);
