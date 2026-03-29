import React, { useMemo } from "react";
import { Table as FlowbiteTable, TableHead, TableBody } from "flowbite-react";
import { FaTimes } from "react-icons/fa";
import { useTableStore } from "../stores/tableStore";
import {
	TABLE_CONTAINER_CLASSES,
	TABLE_HEADER_CLASSES,
} from "../constants/styles";
import SellerTableRow from "./SellerTableRow";

const RankingTable: React.FC = () => {
	const searchQuery = useTableStore((state) => state.searchQuery);
	const metaFilter = useTableStore((state) => state.metaFilter);
	const setSearchQuery = useTableStore((state) => state.setSearchQuery);
	const setMetaFilter = useTableStore((state) => state.setMetaFilter);
	const getFilteredData = useTableStore((state) => state.getFilteredData);

	// Memoize filtered data to avoid unnecessary recalculations
	const filteredData = useMemo(
		() => getFilteredData(),
		[getFilteredData],
	);

	const hasActiveFilters = searchQuery.length > 0 || metaFilter !== "all";

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleMetaFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setMetaFilter(e.target.value as "all" | "success" | "warning" | "failure");
	};

	const handleClearFilters = () => {
		setSearchQuery("");
		setMetaFilter("all");
	};

	return (
		<div>
			{/* Search & Filter Controls - following ui-ux-pro-max touch targets (44Ã—44px min) */}
			<div className="mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-end">
				{/* Search input */}
				<div className="flex-1 min-w-0">
					<label
						htmlFor="seller-search"
						className="block text-xs font-medium text-violet-900 mb-2">
						Buscar Vendedor
					</label>
					<input
						id="seller-search"
						type="text"
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder="Digite o nome do vendedor..."
						aria-label="Buscar vendedores por nome"
						aria-describedby="search-help"
						className="w-full px-4 py-2.5 text-sm border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-150"
					/>
					<p
						id="search-help"
						className="text-xs text-gray-500 mt-1">
						A busca Ã© case-insensitive
					</p>
				</div>

				{/* Meta status filter */}
				<div className="flex flex-col gap-2">
					<label
						htmlFor="meta-filter"
						className="block text-xs font-medium text-violet-900">
						Filtro de Meta
					</label>
					<select
						id="meta-filter"
						value={metaFilter}
						onChange={handleMetaFilterChange}
						aria-label="Filtrar vendedores por status de meta"
						className="px-4 py-2.5 text-sm border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-150 bg-white">
						<option value="all">Todos</option>
						<option value="success">â‰¥ 100% (Success)</option>
						<option value="warning">85-99% (Aviso)</option>
						<option value="failure">&lt; 85% (Falha)</option>
					</select>
				</div>

				{/* Clear filters button - 44Ã—44px minimum per ui-ux-pro-max */}
				{hasActiveFilters && (
					<button
						onClick={handleClearFilters}
						aria-label="Limpar todos os filtros"
						className="flex items-center justify-center gap-2 min-h-10 px-4 py-2.5 bg-violet-100 text-violet-700 hover:bg-violet-200 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm font-medium"
						title="Limpar filtros">
						<FaTimes size={14} />
						<span>Limpar</span>
					</button>
				)}
			</div>

			{/* Results counter */}
			<div className="mb-3 text-sm text-gray-600">
				Mostrando <strong>{filteredData.length}</strong> de{" "}
				<strong>{useTableStore((state) => state.data.length)}</strong>{" "}
				vendedores
			</div>

			{/* Table */}
			{filteredData.length > 0 ? (
				<div className={TABLE_CONTAINER_CLASSES}>
					<FlowbiteTable hoverable>
						<TableHead>
							<tr
								style={{
									background:
										"linear-gradient(90deg, #3d1f8a 0%, #6d28d9 100%)",
								}}>
								<th
									className={TABLE_HEADER_CLASSES}
									aria-sort="none">
									#
								</th>
								<th
									className={TABLE_HEADER_CLASSES}
									aria-sort="none">
									Vendedor
								</th>
								<th
									className={TABLE_HEADER_CLASSES}
									aria-sort="none">
									Faturamento
								</th>
								<th
									className={TABLE_HEADER_CLASSES}
									aria-sort="none">
									Qtd
								</th>
								<th
									className={TABLE_HEADER_CLASSES}
									aria-sort="none">
									Ticket MÃ©dio
								</th>
								<th
									className={TABLE_HEADER_CLASSES}
									aria-sort="none">
									Meta (%)
								</th>
							</tr>
						</TableHead>

						<TableBody className="divide-y divide-violet-50">
							{filteredData.map((row, index) => (
								<SellerTableRow
									key={row.id}
									seller={row}
									index={index}
								/>
							))}
						</TableBody>
					</FlowbiteTable>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-12 text-center">
					<p className="text-gray-600 font-medium">
						Nenhum vendedor encontrado
					</p>
					<p className="text-sm text-gray-500 mt-1">
						Tente ajustar seus filtros de busca ou meta
					</p>
				</div>
			)}
		</div>
	);
};

export default React.memo(RankingTable);

