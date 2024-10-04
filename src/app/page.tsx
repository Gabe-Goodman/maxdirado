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

// _app.tsx or layout.tsx
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
