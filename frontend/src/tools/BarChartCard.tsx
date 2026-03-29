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
	tooltipFormatter?: (value: any) => string;
	height?: number;
}

const BarChartCard = React.memo(
	<T extends Record<string, any>>({
		title,
		data,
		dataKey,
		barName,
		barColor,
		xAxisKey,
		yAxisFormatter,
		tooltipFormatter,
		height = 300,
	}: BarChartCardProps<T>) => {
		return (
			<div className={CHART_CARD_CLASSES}>
				<h3 className={CHART_TITLE_CLASSES}>{title}</h3>
				<ResponsiveContainer width="100%" height={height}>
					<BarChart data={data} margin={CHART_MARGIN}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey={xAxisKey} />
						<YAxis tickFormatter={yAxisFormatter} />
						<Tooltip formatter={tooltipFormatter} />
						<Legend />
						<Bar
							dataKey={dataKey}
							name={barName}
							fill={barColor}
							radius={CHART_RADIUS}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	}
) as <T extends Record<string, any>>(
	props: BarChartCardProps<T>
) => React.ReactElement;

export default BarChartCard;
