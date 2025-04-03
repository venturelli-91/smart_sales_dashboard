"use client";

import {
	Sidebar,
	SidebarItem,
	SidebarItemGroup,
	SidebarItems,
} from "flowbite-react";
import {
	HiArrowSmRight,
	HiChartPie,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards,
} from "react-icons/hi";

const SidebarComponent: React.FC = () => {
	return (
		<div className="flex flex-col items-start justify-start">
			<Sidebar
				aria-label="Default sidebar example"
				className="w-64">
				<SidebarItems>
					<SidebarItemGroup>
						<SidebarItem
							href="#"
							icon={HiChartPie}>
							Dashboard
						</SidebarItem>
						<SidebarItem
							href="#"
							icon={HiViewBoards}
							label="Pro"
							labelColor="dark">
							Kanban
						</SidebarItem>
						<SidebarItem
							href="#"
							icon={HiUser}>
							Users
						</SidebarItem>
						<SidebarItem
							href="#"
							icon={HiShoppingBag}>
							Products
						</SidebarItem>
						<SidebarItem
							href="#"
							icon={HiArrowSmRight}>
							Sign In
						</SidebarItem>
						<SidebarItem
							href="#"
							icon={HiTable}>
							Sign Up
						</SidebarItem>
					</SidebarItemGroup>
				</SidebarItems>
			</Sidebar>
		</div>
	);
};

export default SidebarComponent;
