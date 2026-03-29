import React from "react";

// Lazy-load chart components to improve initial page load time
export const LazySalesEvolutionChart = React.lazy(
	() => import("./SalesEvolutionChart")
);

export const LazyTicketChart = React.lazy(
	() => import("./TicketChart")
);
