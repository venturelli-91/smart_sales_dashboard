/**
 * Dashboard Section Labels & Text Content
 * Centralized text content for reusability and i18n ready
 */

export const DASHBOARD_SECTIONS = {
	kpiCards: {
		title: "KPI Cards",
		description: "Key performance indicators",
	},
	historicalPerformance: {
		id: "historical-performance",
		title: "Desempenho Histórico",
		description: "Historical performance analysis",
	},
	salesEvolution: {
		title: "Evolução de Vendas por Ano",
		sheetName: "Evolução de Vendas",
	},
	ticketAverage: {
		title: "Ticket Médio por Ano",
		sheetName: "Ticket Médio",
	},
	salesDistribution: {
		id: "sales-distribution",
		title: "Distribuição de Vendas",
		description: "Sales distribution pie chart",
	},
	sellerRanking: {
		id: "seller-ranking",
		title: "Ranking de Vendedores",
		description: "Top sellers ranking",
		exportButtonText: "Exportar Ranking",
		fileName: "ranking_vendedores",
	},
} as const;

export const CHART_TITLES = {
	salesEvolution: DASHBOARD_SECTIONS.salesEvolution.title,
	ticketAverage: DASHBOARD_SECTIONS.ticketAverage.title,
	salesDistribution: DASHBOARD_SECTIONS.salesDistribution.title,
} as const;

export const EXPORT_SHEET_NAMES = {
	salesEvolution: DASHBOARD_SECTIONS.salesEvolution.sheetName,
	ticketAverage: DASHBOARD_SECTIONS.ticketAverage.sheetName,
} as const;
