import React from "react";
import { Select } from "flowbite-react";
import { FaFilter, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const MenuBar: React.FC = () => {
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
								<MdDashboard size={28} className="text-white" />
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
									Abril / 2025
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
									className="w-28"
									style={{
										borderColor:
											"rgba(167,139,250,0.4)",
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
									className="w-28"
									style={{
										borderColor:
											"rgba(167,139,250,0.4)",
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
							<button className="bg-white/15 hover:bg-white/25 transition-colors duration-150 p-2.5 rounded-xl text-white h-[38px] self-end border border-white/20">
								<FaFilter size={16} />
							</button>
						</div>

						{/* Right: user avatar button */}
						<div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
							<button className="bg-white/15 hover:bg-white/25 transition-colors duration-150 p-2.5 rounded-xl text-white border border-white/20 flex items-center gap-2">
								<FaUser size={16} />
								<span className="text-sm font-medium text-white/80 hidden sm:inline">
									Perfil
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Clean bottom fade instead of SVG wave */}
				<div
					className="absolute bottom-0 left-0 right-0"
					style={{
						height: "60px",
						background:
							"linear-gradient(to bottom, transparent 0%, rgba(248,247,255,0.15) 100%)",
					}}
				/>
			</div>

			{/* Spacer to push content below the fixed header */}
			<div
				style={{
					height: "clamp(220px, 28vh, 280px)",
					minHeight: "220px",
				}}
			/>
		</div>
	);
};

export default MenuBar;
