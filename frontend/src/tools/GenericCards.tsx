import React from "react";
import { Card } from "flowbite-react";
import {
	IoCashOutline,
	IoStatsChartOutline,
	IoReceiptOutline,
	IoTrendingUp,
	IoTrendingDown,
} from "react-icons/io5";
import { GENERIC_CARD_CLASSES } from "../constants/styles";

export interface KPICardProps {
	title: string;
	description: string;
	value: string;
	bgColor?: string;
	textColor?: string;
	trend?: "up" | "down" | "neutral";
	cardIndex?: number;
}

const CARD_ICONS = [IoCashOutline, IoStatsChartOutline, IoReceiptOutline];

const GenericCard: React.FC<KPICardProps> = ({
	title,
	description,
	value,
	bgColor = "white",
	textColor = "black",
	trend = "neutral",
	cardIndex = 0,
}) => {
	const TrendIcon =
		trend === "up" ? IoTrendingUp : trend === "down" ? IoTrendingDown : null;
	const trendColor = trend === "up" ? "text-emerald-200" : "text-red-300";
	const KpiIcon = CARD_ICONS[cardIndex % CARD_ICONS.length];

	// Extract the percentage from description (e.g., "+15%" from "+15% em relação ao...")
	const percentageMatch = description.match(/([+-]?\d+%)/);
	const percentageText = percentageMatch ? percentageMatch[1] : "";

	return (
		<Card
			className={GENERIC_CARD_CLASSES + " dark:bg-slate-800"}
			style={{ background: bgColor }}>
			{/* Top row: icon chip + trend indicator */}
			<div className="flex items-start justify-between mb-3">
				<div className="bg-white/20 dark:bg-white/10 rounded-xl p-2.5">
					<KpiIcon
						size={22}
						style={{ color: textColor }}
					/>
				</div>
				{TrendIcon && (
					<div className="flex items-center gap-1">
						<TrendIcon
							size={16}
							className={trendColor}
						/>
						<span className={`text-xs font-medium ${trendColor}`}>
							{percentageText}
						</span>
					</div>
				)}
			</div>

			{/* Value */}
			<p
				className="font-bold text-3xl tracking-tight leading-none mb-1 dark:text-white"
				style={{ color: textColor }}>
				{value}
			</p>

			{/* Title */}
			<h5
				className="text-sm font-medium opacity-80 mb-2 dark:text-gray-200"
				style={{ color: textColor }}>
				{title}
			</h5>

			{/* Description — bottom separator line */}
			<div className="pt-2 border-t border-white/20 dark:border-white/10">
				<p
					className="text-xs opacity-70 dark:opacity-60 dark:text-gray-300"
					style={{ color: textColor }}>
					{description}
				</p>
			</div>
		</Card>
	);
};

export default React.memo(GenericCard);
