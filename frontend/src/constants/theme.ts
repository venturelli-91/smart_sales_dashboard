// Light Mode Colors (Default)
export const LIGHT_COLORS = {
	// Brand purple scale
	primary: "#4c1d95",
	primaryDark: "#2d1569",
	primaryLight: "#6d28d9",
	primaryFaint: "#ede9fe",

	// Chart bar colors (on-brand)
	success: "#8b5cf6",
	info: "#6d28d9",
	warning: "#6366f1",

	// KPI gradient colors
	kpiSalesFrom: "#059669",
	kpiSalesTo: "#10b981",
	kpiGoalFrom: "#6d28d9",
	kpiGoalTo: "#8b5cf6",
	kpiTicketFrom: "#4338ca",
	kpiTicketTo: "#6366f1",

	// Surfaces
	bg: "#f8f7ff",
	surface: "#ffffff",
	border: "#ede9fe",
	text: "#1f2937",
	textMuted: "#6b7280",
	cardBg: "#ffffff",
};

// Dark Mode Colors
export const DARK_COLORS = {
	// Brand purple scale (darker environment)
	primary: "#a78bfa",
	primaryDark: "#8b5cf6",
	primaryLight: "#c4b5fd",
	primaryFaint: "#312e81",

	// Chart bar colors (contrast-adjusted)
	success: "#86efac",
	info: "#a78bfa",
	warning: "#fbbf24",

	// KPI gradient colors (dark-friendly)
	kpiSalesFrom: "#10b981",
	kpiSalesTo: "#34d399",
	kpiGoalFrom: "#a78bfa",
	kpiGoalTo: "#c4b5fd",
	kpiTicketFrom: "#60a5fa",
	kpiTicketTo: "#93c5fd",

	// Surfaces
	bg: "#0f172a",
	surface: "#1e293b",
	border: "#334155",
	text: "#f1f5f9",
	textMuted: "#94a3b8",
	cardBg: "#1e293b",
};

// Export current colors (will be dynamic via context)
export const COLORS = LIGHT_COLORS;

export const CHART_MARGIN = { top: 5, right: 30, left: 20, bottom: 5 };
export const CHART_RADIUS = [6, 6, 0, 0] as [number, number, number, number];
