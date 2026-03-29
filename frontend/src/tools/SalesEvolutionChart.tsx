import React from "react";
import BarChartCard from "./BarChartCard";
import { SALES_DATA } from "../constants/chartData";
import { COLORS } from "../constants/theme";
import { currencyFormatter } from "../utils/formatters";

const SalesEvolutionChart: React.FC = () => {
	return (
		<BarChartCard
			title="Evolução de Vendas por Ano"
			data={SALES_DATA}
			dataKey="vendas"
			barName="Vendas"
			barColor={COLORS.success}
			xAxisKey="year"
			yAxisFormatter={(value) => `R$ ${value / 1000}k`}
			tooltipFormatter={(value) => currencyFormatter(Number(value))}
		/>
	);
};

export default React.memo(SalesEvolutionChart);
