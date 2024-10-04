// components/Hero.tsx
"use client";
import Image from "next/image";

export function Hero() {
	return (
		<section className="hero">
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
