import React from "react";

// Lazy-load chart components to improve initial page load time
export const LazySalesEvolutionChart = React.lazy(
	() => import("./SalesEvolutionChart"),
);

export const LazyTicketChart = React.lazy(() => import("./TicketChart"));

export const LazyPieGraphics = React.lazy(() => import("./PieGraphics"));

// Interactive variants with drill-down
export const LazyInteractiveSalesEvolutionChart = React.lazy(
	() => import("./InteractiveSalesEvolutionChart"),
);

export const LazyInteractiveTicketChart = React.lazy(
	() => import("./InteractiveTicketChart"),
);
