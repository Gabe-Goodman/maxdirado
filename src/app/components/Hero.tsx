// components/Hero.tsx
"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import MediaQuery from "react-responsive";

export function Hero() {
	return (
		<section className={styles.hero}>
			<MediaQuery query="(max-device-width: 767px)">
				<Image
					src="/images/hero.jpg"
					alt="Max DiRado"
					width={800} // Adjust width based on your image requirements
					height={600} // Adjust height based on your image requirements
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
					priority
				/>
			</MediaQuery>
			<MediaQuery query="(min-device-width: 768px)">
				<Image
					src="/images/heroMobileSmall.jpg"
					alt="Max DiRado"
					width={1920} // Adjust width based on your image requirements
					height={1080} // Adjust height based on your image requirements
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
					priority
				/>
			</MediaQuery>
		</section>
	);
}
