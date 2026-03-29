import React from "react";
import BarChartCard from "./BarChartCard";
import { TICKET_DATA } from "../constants/chartData";
import { COLORS } from "../constants/theme";
import { currencyFormatter } from "../utils/formatters";

const TicketChart: React.FC = () => {
	return (
		<BarChartCard
			title="Ticket Médio por Ano"
			data={TICKET_DATA}
			dataKey="ticket"
			barName="Ticket Médio"
			barColor={COLORS.warning}
			xAxisKey="year"
			yAxisFormatter={(value) => `R$ ${value}`}
			tooltipFormatter={(value) => currencyFormatter(Number(value))}
		/>
	);
};

export default React.memo(TicketChart);
