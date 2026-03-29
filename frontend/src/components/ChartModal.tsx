import React from "react";
import { Modal } from "flowbite-react";
import { useChartModalStore } from "../stores/chartModalStore";
import { formatCurrency } from "../utils/formatters";

const ChartModal: React.FC = () => {
	const { isOpen, title, data, closeModal } = useChartModalStore();

	if (!data) return null;

	return (
		<Modal show={isOpen} onClose={closeModal} size="md">
			<div className="dark:bg-slate-800">
				{/* Header */}
				<div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-700 px-6 py-4">
					<h3 className="text-lg font-bold text-gray-900 dark:text-white">
						{title}
					</h3>
					<button
						onClick={closeModal}
						className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl leading-none">
						×
					</button>
				</div>

				{/* Body */}
				<div className="px-6 py-4 space-y-4">
					{/* Period Information */}
					<div className="bg-violet-50 dark:bg-slate-700 rounded-lg p-4 border border-violet-100 dark:border-slate-600">
						<h4 className="text-sm font-semibold text-violet-900 dark:text-violet-200 mb-2">
							Período
						</h4>
						<p className="text-lg font-bold text-violet-900 dark:text-white">
							{data.period}
						</p>
					</div>

					{/* Main Value */}
					{data.value !== undefined && (
						<div className="bg-emerald-50 dark:bg-slate-700 rounded-lg p-4 border border-emerald-100 dark:border-slate-600">
							<h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-300 mb-2">
								Faturamento Total
							</h4>
							<p className="text-2xl font-bold text-emerald-900 dark:text-emerald-300">
								{formatCurrency(data.value)}
							</p>
						</div>
					)}

					{/* Percentage */}
					{data.percentage !== undefined && (
						<div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4 border border-blue-100 dark:border-slate-600">
							<h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
								Percentual da Meta
							</h4>
							<p className="text-2xl font-bold text-blue-900 dark:text-blue-300">
								{data.percentage}%
							</p>
						</div>
					)}

					{/* Details Section */}
					{data.details && Object.keys(data.details).length > 0 && (
						<div className="border-t border-gray-200 dark:border-slate-600 pt-4">
							<h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
								Detalhes Adicionais
							</h4>
							<div className="space-y-2">
								{Object.entries(data.details).map(([key, value]) => (
									<div
										key={key}
										className="flex justify-between items-center py-2 px-3 bg-gray-50 dark:bg-slate-700 rounded">
										<span className="text-sm text-gray-600 dark:text-gray-300">
											{String(key).replace(/_/g, " ")}
										</span>
										<span className="font-semibold text-gray-900 dark:text-white">
											{typeof value === "number"
												? formatCurrency(value)
												: String(value)}
										</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="flex justify-end gap-2 border-t border-gray-200 dark:border-slate-700 px-6 py-4">
					<button
						onClick={closeModal}
						className="px-4 py-2 bg-violet-600 dark:bg-violet-700 text-white rounded-lg hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors duration-150 font-semibold">
						Fechar
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ChartModal;
