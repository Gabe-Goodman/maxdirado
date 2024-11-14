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
			<div className="main-content">
				<Hero />
				<PreSave />
				<FeatureSection />
				<Patreon />
				<Newsletter />
				<Footer />
			</div>
		</div>
	);
}
