"use client";

import { UserButton } from "@clerk/nextjs";


export default function Home() {
	return (
		<div className="bg-gray-300">
			<h1>Hello ji Home Page</h1>
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
