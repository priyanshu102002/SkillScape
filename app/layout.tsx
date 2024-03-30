import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/components/provider/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SkillScape",
	description:
		"A cutting-edge Learning Management System (LMS) designed to revolutionize the way we learn and teach.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<ToasterProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
