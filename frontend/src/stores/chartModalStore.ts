import { create } from "zustand";

export interface ChartModalData {
	period: string; // e.g., "2025", "Abril 2025"
	year?: number;
	month?: number;
	value?: number;
	percentage?: number;
	details?: Record<string, unknown>;
}

interface ChartModalStore {
	isOpen: boolean;
	data: ChartModalData | null;
	title: string;
	openModal: (title: string, data: ChartModalData) => void;
	closeModal: () => void;
}

export const useChartModalStore = create<ChartModalStore>((set) => ({
	isOpen: false,
	data: null,
	title: "",
	openModal: (title: string, data: ChartModalData) => {
		set({
			isOpen: true,
			title,
			data,
		});
	},
	closeModal: () => {
		set({
			isOpen: false,
			data: null,
			title: "",
		});
	},
}));
