import React from "react";
import { useTableStore } from "../stores/tableStore";

interface MetaStatusBadgeProps {
	percentual: number;
}

const BADGE_STYLES: Record<"success" | "warning" | "failure", string> = {
	success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
	warning: "bg-amber-50 text-amber-700 border border-amber-200",
	failure: "bg-red-50 text-red-600 border border-red-200",
};

const MetaStatusBadge: React.FC<MetaStatusBadgeProps> = ({ percentual }) => {
	const getMetaStatusType = useTableStore((state) => state.getMetaStatusType);
	const statusType = getMetaStatusType(percentual);

	return (
		<span
			className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${BADGE_STYLES[statusType]}`}>
			{percentual}%
		</span>
	);
};

export default React.memo(MetaStatusBadge);
