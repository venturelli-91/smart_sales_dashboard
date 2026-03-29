import React from "react";
import { TableRow, TableCell } from "flowbite-react";
import { Seller } from "../stores/tableStore";
import { formatCurrency } from "../utils/formatters";
import { TABLE_CELL_CLASSES } from "../constants/styles";
import MetaStatusBadge from "./MetaStatusBadge";

interface SellerTableRowProps {
	seller: Seller;
	index: number;
}

const SellerTableRow: React.FC<SellerTableRowProps> = ({ seller, index }) => {
	return (
		<TableRow className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
			<TableCell className={`${TABLE_CELL_CLASSES} font-medium`}>
				{index + 1}
			</TableCell>
			<TableCell className={TABLE_CELL_CLASSES}>{seller.vendedor}</TableCell>
			<TableCell className={TABLE_CELL_CLASSES}>
				{formatCurrency(seller.faturamento)}
			</TableCell>
			<TableCell className={TABLE_CELL_CLASSES}>{seller.quantidade}</TableCell>
			<TableCell className={TABLE_CELL_CLASSES}>
				{formatCurrency(seller.ticketMedio)}
			</TableCell>
			<TableCell className={TABLE_CELL_CLASSES}>
				<MetaStatusBadge percentual={seller.metaPercentual} />
			</TableCell>
		</TableRow>
	);
};

export default React.memo(SellerTableRow);
