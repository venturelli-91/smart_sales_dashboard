import React from "react";
import {
	PieChart,
	Pie,
	Cell,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { CHART_CARD_CLASSES, CHART_TITLE_CLASSES } from "../constants/styles";

interface PieDataPoint {
	name: string;
	value: number;
}

interface PieGraphicsProps {
	title?: string;
	data?: PieDataPoint[];
	showLegend?: boolean;
	height?: number;
}

const DEFAULT_DATA: PieDataPoint[] = [
	{ name: "Faturamento", value: 45 },
	{ name: "Meta", value: 35 },
	{ name: "Crescimento", value: 20 },
];

const COLORS = ["#8b5cf6", "#6d28d9", "#a78bfa"];

const PieGraphics: React.FC<PieGraphicsProps> = ({
	title = "Distribuição de Vendas",
	data = DEFAULT_DATA,
	showLegend = true,
	height = 320,
}) => {
	return (
		<div className={CHART_CARD_CLASSES + " dark:bg-slate-800"}>
			{/* Chart title with accent bar */}
			<div className="flex items-center gap-2 mb-4">
				<span className="w-1 h-5 rounded-full bg-violet-500 dark:bg-violet-400 inline-block" />
				<h3 className={CHART_TITLE_CLASSES + " dark:text-white"}>{title}</h3>
			</div>

			<ResponsiveContainer
				width="100%"
				height={height}>
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						labelLine={false}
						label={({ name, value }) => `${name}: ${value}%`}
						outerRadius={100}
						fill="#8884d8"
						dataKey="value">
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip
						formatter={(value) => `${value}%`}
						contentStyle={{
							borderRadius: "12px",
							border: "1px solid #ede9fe",
							boxShadow: "0 4px 16px rgba(109,40,217,0.1)",
							fontFamily: "Jost, sans-serif",
							fontSize: "13px",
							backgroundColor: "#f8f7ff",
						}}
						cursor={{ fill: "rgba(167,139,250,0.08)" }}
					/>
					{showLegend && <Legend />}
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PieGraphics;
