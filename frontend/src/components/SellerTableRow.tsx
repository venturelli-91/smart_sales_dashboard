import React from "react";
import { TableRow, TableCell } from "flowbite-react";
import { Seller } from "../stores/tableStore";
import { formatCurrency } from "../utils/formatters";
import { TABLE_CELL_CLASSES } from "../constants/styles";
import MetaStatusBadge from "./MetaStatusBadge";
import { FaMedal } from "react-icons/fa6";

interface SellerTableRowProps {
	seller: Seller;
	index: number;
}

const MEDAL_COLORS = ["text-yellow-400", "text-gray-400", "text-amber-600"];

const SellerTableRow: React.FC<SellerTableRowProps> = ({ seller, index }) => {
	const isTopThree = index < 3;

	return (
		<TableRow
			className={
				index % 2 === 0
					? "bg-white hover:bg-violet-50 transition-colors duration-100"
					: "bg-violet-50/40 hover:bg-violet-50 transition-colors duration-100"
			}>
			{/* Rank cell with medal for top 3 */}
			<TableCell className={`${TABLE_CELL_CLASSES} font-semibold`}>
				{isTopThree ? (
					<div className="flex items-center gap-1.5">
						<FaMedal size={16} className={MEDAL_COLORS[index]} />
						<span>{index + 1}</span>
					</div>
				) : (
					<span className="text-gray-400">{index + 1}</span>
				)}
			</TableCell>

			<TableCell className={`${TABLE_CELL_CLASSES} font-medium text-gray-800`}>
				{seller.vendedor}
			</TableCell>

			<TableCell className={`${TABLE_CELL_CLASSES} tabular-nums`}>
				{formatCurrency(seller.faturamento)}
			</TableCell>

			<TableCell className={`${TABLE_CELL_CLASSES} tabular-nums`}>
				{seller.quantidade}
			</TableCell>

			<TableCell className={`${TABLE_CELL_CLASSES} tabular-nums`}>
				{formatCurrency(seller.ticketMedio)}
			</TableCell>

			<TableCell className={TABLE_CELL_CLASSES}>
				<MetaStatusBadge percentual={seller.metaPercentual} />
			</TableCell>
		</TableRow>
	);
};

export default React.memo(SellerTableRow);
