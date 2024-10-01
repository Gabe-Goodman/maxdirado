// pages/index.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import PreSave from "./components/PreSave";
import FeatureSection from "./components/FeatureSection";
import Newsletter from "./components/Newsletter";

export default function HomePage() {
	return (
		<div>
			<Header />
			<Hero />
			<PreSave />
			<FeatureSection />
			<Newsletter />
		</div>
	);
}
