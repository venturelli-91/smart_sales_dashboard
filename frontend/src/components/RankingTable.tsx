import React from "react";
import {
	Table as FlowbiteTable,
	TableHead,
	TableBody,
} from "flowbite-react";
import { useTableStore } from "../stores/tableStore";
import { TABLE_CONTAINER_CLASSES, TABLE_HEADER_CLASSES } from "../constants/styles";
import SellerTableRow from "./SellerTableRow";

const Table: React.FC = () => {
	const data = useTableStore((state) => state.data);

	return (
		<div className={TABLE_CONTAINER_CLASSES}>
			<FlowbiteTable hoverable>
				<TableHead>
					<tr style={{ background: "linear-gradient(90deg, #3d1f8a 0%, #6d28d9 100%)" }}>
						<th className={TABLE_HEADER_CLASSES}>#</th>
						<th className={TABLE_HEADER_CLASSES}>Vendedor</th>
						<th className={TABLE_HEADER_CLASSES}>Faturamento</th>
						<th className={TABLE_HEADER_CLASSES}>Qtd</th>
						<th className={TABLE_HEADER_CLASSES}>Ticket Médio</th>
						<th className={TABLE_HEADER_CLASSES}>Meta (%)</th>
					</tr>
				</TableHead>

				<TableBody className="divide-y divide-violet-50">
					{data.map((row, index) => (
						<SellerTableRow key={row.id} seller={row} index={index} />
					))}
				</TableBody>
			</FlowbiteTable>
		</div>
	);
};

export default React.memo(Table);
