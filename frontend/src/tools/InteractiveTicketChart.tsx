import React from "react";
import BarChartCard from "./BarChartCard";
import { TICKET_DATA } from "../constants/chartData";
import { COLORS } from "../constants/theme";
import { currencyFormatter } from "../utils/formatters";
import { useChartModalStore } from "../stores/chartModalStore";

const InteractiveTicketChart: React.FC = () => {
	const { openModal } = useChartModalStore();

	const handleBarClick = (data: (typeof TICKET_DATA)[0]) => {
		openModal("Ticket Médio - Detalhes", {
			period: `${data.year}`,
			year: parseInt(data.year, 10),
			value: data.ticket,
			details: {
				"Ano": data.year,
				"Ticket Médio": data.ticket,
			},
		});
	};

	return (
		<BarChartCard
			title="Ticket Médio por Ano"
			data={TICKET_DATA}
			dataKey="ticket"
			barName="Ticket Médio"
			barColor={COLORS.info}
			xAxisKey="year"
			yAxisFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
			tooltipFormatter={(value) => currencyFormatter(Number(value))}
			height={300}
			onBarClick={handleBarClick}
			isInteractive={true}
		/>
	);
};

export default React.memo(InteractiveTicketChart);
