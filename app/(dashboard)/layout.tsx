import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bg-red-400 h-full ">
			<div className="w-full h-[80px] md:pl-56 fixed inset-y-0 z-50">
				<Navbar />
			</div>
			<div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
				<Sidebar />
			</div>
			<main className="md:pl-56 pt-[80px] h-full">{children}</main>
		</div>
	);
}
