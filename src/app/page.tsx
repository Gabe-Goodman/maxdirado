// pages/index.tsx
import {
	Header,
	Hero,
	PreSave,
	FeatureSection,
	Patreon,
	Newsletter,
	Footer,
} from "./components";
import "./globals.css";

export default function HomePage() {
	return (
		<div>
			<Header />
			<Hero />
			<PreSave />
			<FeatureSection />
			<Patreon />
			<Newsletter />
			<Footer />
		</div>
	);
}
