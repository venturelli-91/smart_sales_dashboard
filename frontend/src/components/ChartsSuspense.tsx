import React, { Suspense } from "react";
import { CHART_CARD_CLASSES } from "../constants/styles";

interface ChartsSuspenseProps {
	children: React.ReactNode;
	title?: string;
}

const ChartSkeleton: React.FC<{ title?: string }> = ({ title }) => {
	return (
		<div className={CHART_CARD_CLASSES}>
			{title && <h3 className="text-lg font-bold mb-4 text-purple-900">{title}</h3>}
			<div className="animate-pulse">
				<div className="h-64 bg-gray-200 rounded"></div>
			</div>
		</div>
	);
};

export const ChartsSuspense: React.FC<ChartsSuspenseProps> = ({
	children,
	title,
}) => {
	return (
		<Suspense fallback={<ChartSkeleton title={title} />}>
			{children}
		</Suspense>
	);
};
