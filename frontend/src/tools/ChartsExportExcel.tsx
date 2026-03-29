import * as XLSX from "xlsx";
import { Button } from "flowbite-react";
import { FaFileExcel } from "react-icons/fa";

interface ChartExportSheet<T> {
	data: T[];
	sheetName: string;
}

interface ChartsExportExcelProps<T> {
	sheets: ChartExportSheet<T>[];
	fileName?: string;
	buttonText?: string;
	className?: string;
}

export const ChartsExportExcel = <T extends Record<string, string | number>>({
	sheets,
	fileName = "dados_graficos",
	buttonText = "Exportar Dados dos Gráficos",
	className = "",
}: ChartsExportExcelProps<T>) => {
	const exportToExcel = () => {
		const wb = XLSX.utils.book_new();
		sheets.forEach(({ data, sheetName }) => {
			const ws = XLSX.utils.json_to_sheet(data);
			XLSX.utils.book_append_sheet(wb, ws, sheetName);
		});
		XLSX.writeFile(wb, `${fileName}.xlsx`);
	};

	return (
		<Button
			color="success"
			onClick={exportToExcel}
			className={`flex items-center gap-2 rounded-4xl bg-amber-700 text-white font-extrabold cursor-pointer ${className}`}>
			<FaFileExcel />
			{buttonText}
		</Button>
	);
};
