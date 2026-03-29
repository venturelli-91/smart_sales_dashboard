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
	(a, b) => b.faturamento - a.faturamento
);

interface TableState {
	data: Seller[];
	formatCurrency: (value: number) => string;
	getMetaStatusType: (percentual: number) => "success" | "warning" | "failure";
}

export const useTableStore = create<TableState>(() => ({
	data: sortedData,
	formatCurrency,
	getMetaStatusType: (percentual: number) => {
		if (percentual >= 100) return "success";
		if (percentual >= 85) return "warning";
		return "failure";
	},
}));
