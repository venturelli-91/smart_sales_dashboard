import React, { useMemo } from "react";
import { Select } from "flowbite-react";
import { FaFilter, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useTableStore } from "../stores/tableStore";
import ThemeToggle from "../components/ThemeToggle";

// Month names mapping (Portugal/Brazil)
const MONTH_NAMES: Record<number, string> = {
	1: "Janeiro",
	2: "Fevereiro",
	3: "Março",
	4: "Abril",
	5: "Maio",
	6: "Junho",
	7: "Julho",
	8: "Agosto",
	9: "Setembro",
	10: "Outubro",
	11: "Novembro",
	12: "Dezembro",
};

const MenuBar: React.FC = () => {
	// Subscribe to store
	const selectedYear = useTableStore((state) => state.selectedYear);
	const selectedMonth = useTableStore((state) => state.selectedMonth);
	const setSelectedYear = useTableStore((state) => state.setSelectedYear);
	const setSelectedMonth = useTableStore((state) => state.setSelectedMonth);

	// Memoize month name to avoid recalculation
	const monthName = useMemo(
		() => MONTH_NAMES[selectedMonth] || "Abril",
		[selectedMonth],
	);

	const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(parseInt(e.target.value, 10));
	};

	const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(parseInt(e.target.value, 10));
	};

	return (
		<div className="relative">
			{/* Gradient header panel */}
			<div
				className="absolute top-0 left-0 right-0 z-10 py-6"
				style={{
					background:
						"linear-gradient(135deg, #2d1569 0%, #4c1d95 45%, #6d28d9 100%)",
					height: "clamp(220px, 28vh, 280px)",
					minHeight: "220px",
				}}>
				{/* Subtle noise-texture overlay via pseudo-transparent blobs */}
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage:
							"radial-gradient(circle at 20% 50%, #a78bfa 0%, transparent 50%), " +
							"radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 40%)",
					}}
				/>

				<div className="container mx-auto px-6 h-full relative">
					<div className="flex flex-col md:flex-row items-center justify-between h-full gap-6">
						{/* Left: brand title block */}
						<div className="flex items-center gap-3 w-full md:w-auto">
							<div className="bg-white/15 rounded-2xl p-2.5 hidden sm:flex">
								<MdDashboard
									size={28}
									className="text-white"
									role="img"
									aria-label="Dashboard icon"
								/>
							</div>
							<div>
								<p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-0.5">
									Sales Management
								</p>
								<span
									className="text-white font-bold leading-tight block"
									style={{
										fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
									}}>
									Visão Geral de Vendas
								</span>
								<span className="text-violet-300 text-sm font-medium">
									{monthName} / {selectedYear}
								</span>
							</div>
						</div>

						{/* Center: filter controls */}
						<div className="flex items-end gap-3">
							<div className="flex flex-col gap-1">
								<label
									htmlFor="year"
									className="text-violet-300 text-xs font-medium">
									Ano
								</label>
								<Select
									id="year"
									value={selectedYear}
									onChange={handleYearChange}
									className="w-28"
									aria-label="Selecionar ano para filtrar dados"
									style={{
										borderColor: "rgba(167,139,250,0.4)",
										borderRadius: "0.75rem",
									}}>
									<option value="2025">2025</option>
									<option value="2024">2024</option>
									<option value="2023">2023</option>
									<option value="2022">2022</option>
								</Select>
							</div>
							<div className="flex flex-col gap-1">
								<label
									htmlFor="month"
									className="text-violet-300 text-xs font-medium">
									Mês
								</label>
								<Select
									id="month"
									value={selectedMonth}
									onChange={handleMonthChange}
									className="w-28"
									aria-label="Selecionar mês para filtrar dados"
									style={{
										borderColor: "rgba(167,139,250,0.4)",
										borderRadius: "0.75rem",
									}}>
									<option value="4">Abril</option>
									<option value="3">Março</option>
									<option value="2">Fevereiro</option>
									<option value="1">Janeiro</option>
									<option value="12">Dezembro</option>
									<option value="11">Novembro</option>
									<option value="10">Outubro</option>
									<option value="9">Setembro</option>
									<option value="8">Agosto</option>
									<option value="7">Julho</option>
									<option value="6">Junho</option>
									<option value="5">Maio</option>
								</Select>
							</div>
						</div>

						{/* Right: action buttons */}
						<div className="flex items-center gap-4">
							{/* Filter button - icon-only with aria-label per ui-ux-pro-max */}
							<button
								type="button"
								aria-label="Aplicar filtros"
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300"
								title="Aplicar filtros">
								<FaFilter
									size={16}
									className="text-white"
								/>
							</button>

							{/* Theme Toggle */}
							<ThemeToggle />

							{/* User profile button - icon-only with aria-label */}
							<button
								type="button"
								aria-label="Menu de perfil do usuário"
								className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300"
								title="Perfil do usuário">
								<FaUser
									size={14}
									className="text-white"
								/>
								<span className="text-white text-sm hidden sm:inline">
									Perfil
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Bottom fade + spacer */}
				<div
					style={{
						background:
							"linear-gradient(to bottom, rgba(109,40,217,0.15), transparent)",
						height: "60px",
					}}
				/>
			</div>

			{/* Spacer to push content below the fixed header */}
			<div
				style={{ height: "clamp(220px, 28vh, 280px)", minHeight: "220px" }}
			/>
		</div>
	);
};

export default MenuBar;
