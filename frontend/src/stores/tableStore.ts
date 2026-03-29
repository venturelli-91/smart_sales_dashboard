import { create } from "zustand";
import { formatCurrency } from "../utils/formatters";

export type Seller = {
	id: number;
	vendedor: string;
	faturamento: number;
	quantidade: number;
	ticketMedio: number;
	metaPercentual: number;
};

const initialData: Seller[] = [
	{
		id: 1,
		vendedor: "João Silva",
		faturamento: 128500,
		quantidade: 1250,
		ticketMedio: 102.8,
		metaPercentual: 115,
	},
	{
		id: 2,
		vendedor: "Maria Oliveira",
		faturamento: 98700,
		quantidade: 980,
		ticketMedio: 100.71,
		metaPercentual: 89,
	},
	{
		id: 3,
		vendedor: "Carlos Santos",
		faturamento: 145200,
		quantidade: 1420,
		ticketMedio: 102.25,
		metaPercentual: 130,
	},
	{
		id: 4,
		vendedor: "Amanda Costa",
		faturamento: 88400,
		quantidade: 910,
		ticketMedio: 97.14,
		metaPercentual: 79,
	},
	{
		id: 5,
		vendedor: "Roberto Almeida",
		faturamento: 135800,
		quantidade: 1280,
		ticketMedio: 106.09,
		metaPercentual: 122,
	},
	{
		id: 6,
		vendedor: "Juliana Mendes",
		faturamento: 110500,
		quantidade: 1050,
		ticketMedio: 105.24,
		metaPercentual: 99,
	},
	{
		id: 7,
		vendedor: "Fernando Gomes",
		faturamento: 92300,
		quantidade: 940,
		ticketMedio: 98.19,
		metaPercentual: 83,
	},
];

const sortedData = [...initialData].sort(
	(a, b) => b.faturamento - a.faturamento,
);

interface TableState {
	data: Seller[];
	selectedYear: number;
	selectedMonth: number;
	searchQuery: string;
	metaFilter: "all" | "success" | "warning" | "failure";

	// Utilities
	formatCurrency: (value: number) => string;
	getMetaStatusType: (percentual: number) => "success" | "warning" | "failure";

	// Actions
	setSelectedYear: (year: number) => void;
	setSelectedMonth: (month: number) => void;
	setSearchQuery: (query: string) => void;
	setMetaFilter: (filter: "all" | "success" | "warning" | "failure") => void;
	getFilteredData: () => Seller[];
}

export const useTableStore = create<TableState>((set, get) => ({
	data: sortedData,
	selectedYear: 2025,
	selectedMonth: 4, // April
	searchQuery: "",
	metaFilter: "all",

	formatCurrency,

	getMetaStatusType: (percentual: number) => {
		if (percentual >= 100) return "success";
		if (percentual >= 85) return "warning";
		return "failure";
	},

	setSelectedYear: (year: number) => set({ selectedYear: year }),
	setSelectedMonth: (month: number) => set({ selectedMonth: month }),
	setSearchQuery: (query: string) => set({ searchQuery: query }),
	setMetaFilter: (filter: "all" | "success" | "warning" | "failure") =>
		set({ metaFilter: filter }),

	getFilteredData: () => {
		const state = get();
		const { data, searchQuery, metaFilter, getMetaStatusType } = state;

		return data.filter((seller) => {
			// Filter by search query (case-insensitive)
			const matchesSearch = seller.vendedor
				.toLowerCase()
				.includes(searchQuery.toLowerCase());

			// Filter by meta status
			const statusType = getMetaStatusType(seller.metaPercentual);
			const matchesMetaFilter =
				metaFilter === "all" || statusType === metaFilter;

			return matchesSearch && matchesMetaFilter;
		});
	},
}));
