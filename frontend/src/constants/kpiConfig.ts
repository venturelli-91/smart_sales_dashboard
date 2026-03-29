import { KPICardProps } from "../tools/GenericCards";

export const KPI_CARDS: KPICardProps[] = [
	{
		title: "Visão Geral de Vendas",
		description: "+15% em relação ao mês anterior",
		bgColor: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
		textColor: "white",
		value: "R$ 107.080,00",
		trend: "up",
	},
	{
		title: "Alcance de meta",
		description: "-5% em relação ao mês anterior",
		bgColor: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
		textColor: "white",
		value: "82,5%",
		trend: "down",
	},
	{
		title: "Ticket médio",
		description: "+8% em relação ao mês anterior",
		bgColor: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
		textColor: "white",
		value: "R$ 112,40",
		trend: "up",
	},
];
