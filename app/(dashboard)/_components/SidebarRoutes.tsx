"use client";

import { Compass, Layout } from "lucide-react";

import SidebarItem from "./SidebarItem";

const guestLayout = [
	{
		icon: Layout,
		label: "Dashboard",
		href: "/",
	},
	{
		icon: Compass,
		label: "Browse",
		href: "/search",
	},
];

const SidebarRoutes = () => {
	const routes = guestLayout;
	return (
		<div className="w-full flex flex-col">
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};

export default SidebarRoutes;
