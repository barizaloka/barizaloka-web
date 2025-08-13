import Footer from "@/barizaloka-web/components/Footer";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
