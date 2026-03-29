import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { CHART_CARD_CLASSES, CHART_TITLE_CLASSES } from "../constants/styles";
import { CHART_MARGIN, CHART_RADIUS } from "../constants/theme";

interface BarChartCardProps<T> {
	title: string;
	data: T[];
	dataKey: string;
	barName: string;
	barColor: string;
	xAxisKey: string;
	yAxisFormatter?: (value: number) => string;
	tooltipFormatter?: (value: string | number) => string;
	height?: number;
	onBarClick?: (data: T) => void;
	isInteractive?: boolean;
}

// eslint-disable-next-line react/display-name
const BarChartCard = React.memo(
	<T extends Record<string, string | number>>({
		title,
		data,
		dataKey,
		barName,
		barColor,
		xAxisKey,
		yAxisFormatter,
		tooltipFormatter,
		height = 300,
		onBarClick,
		isInteractive = true,
	}: BarChartCardProps<T>) => {
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
					<BarChart
						data={data}
						margin={CHART_MARGIN}>
						<CartesianGrid
							strokeDasharray="3 3"
							stroke="#ede9fe"
							vertical={false}
						/>
						<XAxis
							dataKey={xAxisKey}
							tick={{ fill: "#6b7280", fontSize: 12 }}
							axisLine={{ stroke: "#ede9fe" }}
							tickLine={false}
						/>
						<YAxis
							tickFormatter={yAxisFormatter}
							tick={{ fill: "#6b7280", fontSize: 12 }}
							axisLine={false}
							tickLine={false}
							width={70}
						/>
						<Tooltip
							formatter={tooltipFormatter}
							contentStyle={{
								borderRadius: "12px",
								border: "1px solid #ede9fe",
								boxShadow: "0 4px 16px rgba(109,40,217,0.1)",
								fontFamily: "Jost, sans-serif",
								fontSize: "13px",
							}}
							cursor={{ fill: "rgba(167,139,250,0.08)" }}
						/>
						<Legend />
						<Bar
							dataKey={dataKey}
							name={barName}
							fill={barColor}
							radius={CHART_RADIUS}
							onClick={
								isInteractive && onBarClick
									? (e) => onBarClick(e.payload as T)
									: undefined
							}
							cursor={isInteractive && onBarClick ? "pointer" : "default"}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	},
) as <T extends Record<string, string | number>>(
	props: BarChartCardProps<T>,
) => React.ReactElement;

export default BarChartCard;
