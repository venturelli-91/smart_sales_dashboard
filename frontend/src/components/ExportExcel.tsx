/**
 * @deprecated Use RankingExportExcel instead. This component is a duplicate.
 * Safe to delete.
 */

import * as XLSX from "xlsx";
import { Button } from "flowbite-react";
import { FaFileExcel } from "react-icons/fa";

interface ExportExcelProps<T> {
	data: T[];
	fileName: string;
	buttonText?: string;
	className?: string;
	sheetName?: string;
}

export const ExportExcel = <T extends Record<string, string | number>>({
	data,
	fileName,
	buttonText = "Exportar .xlsx",
	className = "",
	sheetName = "Dados",
}: ExportExcelProps<T>) => {
	const exportToExcel = () => {
		const ws = XLSX.utils.json_to_sheet(data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, sheetName);
		XLSX.writeFile(wb, `${fileName}.xlsx`);
	};

	return (
		<Button
			color="success"
			onClick={exportToExcel}
			className={`flex items-center gap-2 rounded-4xl bg-amber-700 text-white font-extrabold cursor-pointer ${className}`}>
			<FaFileExcel className="text-white" />
			{buttonText}
		</Button>
	);
};
