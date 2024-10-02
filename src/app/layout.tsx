import { Poppins } from "next/font/google";
import "./globals.css"; // Ensure you are importing Tailwind's global styles

// Load Poppins font using Next.js Font Optimization
const poppins = Poppins({
	subsets: ["latin"], // Ensure you're loading the correct subsets
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify weights
	display: "swap", // Use 'swap' to ensure quick loading
});

export const metadata = {
	title: "Max DiRado",
	description: "Musical Artist",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={poppins.className}>
			{" "}
			{/* Apply the Poppins font globally */}
			<body>{children}</body>
		</html>
	);
}
