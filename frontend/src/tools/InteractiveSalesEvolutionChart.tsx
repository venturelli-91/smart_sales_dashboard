import React from "react";
import BarChartCard from "./BarChartCard";
import { SALES_DATA } from "../constants/chartData";
import { COLORS } from "../constants/theme";
import { currencyFormatter } from "../utils/formatters";
import { useChartModalStore } from "../stores/chartModalStore";

const InteractiveSalesEvolutionChart: React.FC = () => {
	const { openModal } = useChartModalStore();

	const handleBarClick = (data: (typeof SALES_DATA)[0]) => {
		openModal("Evolução de Vendas - Detalhes", {
			period: `${data.year}`,
			year: parseInt(data.year, 10),
			value: data.vendas,
			details: {
				"Ano": data.year,
				"Faturamento Total": data.vendas,
			},
		});
	};

	return (
		<BarChartCard
			title="Evolução de Vendas por Ano"
			data={SALES_DATA}
			dataKey="vendas"
			barName="Vendas"
			barColor={COLORS.success}
			xAxisKey="year"
			yAxisFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
			tooltipFormatter={(value) => currencyFormatter(Number(value))}
			height={300}
			onBarClick={handleBarClick}
			isInteractive={true}
		/>
	);
};

export default React.memo(InteractiveSalesEvolutionChart);
