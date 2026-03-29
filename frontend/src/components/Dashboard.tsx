import React, { Suspense } from "react";
import GenericCard from "../tools/GenericCards";
import Table from "./RankingTable";
import { RankingExportExcel } from "../tools/RankingExportExcel";
import { ChartsExportExcel } from "../tools/ChartsExportExcel";
import { useTableStore } from "../stores/tableStore";
import { KPI_CARDS } from "../constants/kpiConfig";
import { SALES_DATA, TICKET_DATA } from "../constants/chartData";
import { LazySalesEvolutionChart, LazyTicketChart } from "../tools/LazyCharts";

const ChartSkeleton: React.FC<{ title?: string }> = ({ title }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md">
			{title && <h3 className="text-lg font-bold mb-4 text-purple-900">{title}</h3>}
			<div className="animate-pulse">
				<div className="h-64 bg-gray-200 rounded"></div>
			</div>
		</div>
	);
};

const Dashboard: React.FC = () => {
	const data = useTableStore((state) => state.data);

	return (
		<div className="container mx-auto px-4 md:px-12">
			<div className="relative z-30 mt-10 sm:mt-0 md:-mt-16 lg:-mt-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
					{KPI_CARDS.map((card, index) => (
						<GenericCard key={index} {...card} cardIndex={index} />
					))}
				</div>
			</div>

			<div className="mt-10 mb-2">
				<div className="flex items-center gap-2 mb-4">
					<span className="w-1 h-5 rounded-full bg-violet-500 inline-block" />
					<h2 className="text-sm font-semibold text-violet-900 uppercase tracking-widest">
						Desempenho Histórico
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Suspense fallback={<ChartSkeleton title="Evolução de Vendas por Ano" />}>
						<LazySalesEvolutionChart />
					</Suspense>
					<Suspense fallback={<ChartSkeleton title="Ticket Médio por Ano" />}>
						<LazyTicketChart />
					</Suspense>
				</div>
			</div>

			<div className="mt-8 mb-8 flex justify-end gap-4">
				<ChartsExportExcel
					sheets={[
						{ data: SALES_DATA, sheetName: "Evolução de Vendas" },
						{ data: TICKET_DATA, sheetName: "Ticket Médio" },
					]}
				/>
			</div>

			<div className="mt-10 mb-12">
				<div className="flex items-center gap-2 mb-4">
					<span className="w-1 h-5 rounded-full bg-violet-500 inline-block" />
					<h2 className="text-sm font-semibold text-violet-900 uppercase tracking-widest">
						Ranking de Vendedores
					</h2>
				</div>
				<Table />
			</div>

			<div className="mt-8 mb-8 flex justify-end">
				<RankingExportExcel
					data={data}
					fileName="ranking_vendedores"
					buttonText="Exportar Ranking"
					className="flex items-center gap-2 rounded-full bg-violet-700 text-white text-sm font-semibold cursor-pointer hover:bg-violet-800 transition-colors duration-150 px-5 py-2.5"
				/>
			</div>
		</div>
	);
};

export default Dashboard;
