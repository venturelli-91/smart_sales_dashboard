import * as XLSX from "xlsx";
import { Button } from "flowbite-react";
import { FaFileExcel } from "react-icons/fa";

interface ChartExportSheet {
	data: Record<string, string | number>[];
	sheetName: string;
}

interface ChartsExportExcelProps {
	sheets: ChartExportSheet[];
	fileName?: string;
	buttonText?: string;
	className?: string;
}

export const ChartsExportExcel = ({
	sheets,
	fileName = "dados_graficos",
	buttonText = "Exportar Dados dos Gráficos",
	className = "",
}: ChartsExportExcelProps) => {
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
			className={`flex items-center gap-2 rounded-full bg-violet-700 text-white text-sm font-semibold cursor-pointer hover:bg-violet-800 transition-colors duration-150 px-5 py-2.5 ${className}`}>
			<FaFileExcel />
			{buttonText}
		</Button>
	);
};
