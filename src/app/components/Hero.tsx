// components/Hero.tsx
"use client";
import Image from "next/image";
import MediaQuery from "react-responsive";

export function Hero() {
	return (
		<section className="hero">
			<MediaQuery query="(max-device-width: 767px)">
				<Image
					src="/images/hero.jpg"
					alt="Max DiRado"
					width={100}
					height={0}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</MediaQuery>
			<MediaQuery query="(min-device-width: 768px)">
				<Image
					src="/images/heroMobileSmall.jpg"
					alt="Max DiRado"
					width={50}
					height={0}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</MediaQuery>
			<style jsx>{`
				.hero {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					background-color: #f9f9f9;
				}
			`}</style>
		</section>
	);
}
