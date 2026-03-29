import React from "react";
import { Badge } from "flowbite-react";
import { useTableStore } from "../stores/tableStore";

interface MetaStatusBadgeProps {
	percentual: number;
}

const MetaStatusBadge: React.FC<MetaStatusBadgeProps> = ({ percentual }) => {
	const getMetaStatusType = useTableStore((state) => state.getMetaStatusType);

	const statusType = getMetaStatusType(percentual);

	return (
		<Badge color={statusType} className="px-3 py-1">
			{percentual}%
		</Badge>
	);
};

export default React.memo(MetaStatusBadge);
