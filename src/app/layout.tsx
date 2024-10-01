import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

// Load Poppins font using Next.js Font Optimization
const poppins = Poppins({
	subsets: ["latin"], // Specify character subsets if needed
	weight: ["400", "700"], // Specify the font weights you want to use
	display: "swap", // Allows faster loading for users
});

export const metadata = {
	title: "Your Website Title",
	description: "Your website description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={poppins.className}>
			<body>{children}</body>
		</html>
	);
}
