import React from "react";
import GenericCard from "../tools/GenericCards";
import SalesEvolutionChart from "../tools/SalesEvolutionChart";
import TicketChart from "../tools/TicketChart";
import Table from "./RankingTable";
import { RankingExportExcel } from "../tools/RankingExportExcel";
import { ChartsExportExcel } from "../tools/ChartsExportExcel";
import { useTableStore } from "../stores/tableStore";
import { KPI_CARDS } from "../constants/kpiConfig";
import { SALES_DATA, TICKET_DATA } from "../constants/chartData";

const Dashboard: React.FC = () => {
	const data = useTableStore((state) => state.data);

	return (
		<div className="container mx-auto px-4 md:px-12">
			<div className="relative z-30 mt-10 sm:mt-0 md:-mt-20 lg:-mt-30">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
					{KPI_CARDS.map((card, index) => (
						<GenericCard key={index} {...card} />
					))}
				</div>
			</div>

			<div className="mt-8 mb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<SalesEvolutionChart />
					<TicketChart />
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

			<div className="mt-8 mb-12">
				<h3 className="text-xl font-bold mb-4 text-purple-900">
					Ranking de Vendedores
				</h3>
				<Table />
			</div>

			<div className="mt-8 mb-8 flex justify-end">
				<RankingExportExcel
					data={data}
					fileName="ranking_vendedores"
					buttonText="Exportar Ranking"
					className="rounded-4xl bg-amber-700 text-white font-extrabold cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Dashboard;
