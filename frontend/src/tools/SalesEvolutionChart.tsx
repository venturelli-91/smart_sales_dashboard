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
import { SALES_DATA } from "../constants/chartData";
import { COLORS, CHART_MARGIN, CHART_RADIUS } from "../constants/theme";
import { CHART_CARD_CLASSES, CHART_TITLE_CLASSES } from "../constants/styles";
import { currencyFormatter } from "../utils/formatters";

const SalesEvolutionChart: React.FC = () => {
	return (
		<div className={CHART_CARD_CLASSES}>
			<h3 className={CHART_TITLE_CLASSES}>
				Evolução de Vendas por Ano
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={SALES_DATA} margin={CHART_MARGIN}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="year" />
					<YAxis tickFormatter={(value) => `R$ ${value / 1000}k`} />
					<Tooltip formatter={(value) => currencyFormatter(Number(value))} />
					<Legend />
					<Bar
						dataKey="vendas"
						name="Vendas"
						fill={COLORS.success}
						radius={CHART_RADIUS}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default React.memo(SalesEvolutionChart);
