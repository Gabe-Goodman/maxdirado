// pages/index.tsx
import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
	return (
		<section className={styles.hero}>
			<Image
				src="/images/hero.jpg"
				alt="Max DiRado"
				width={800}
				height={600}
				sizes="100vw"
				className={styles.heroImageMobile}
				priority
			/>
			<Image
				src="/images/heroMobileSmall.jpg"
				alt="Max DiRado"
				width={1920}
				height={1080}
				sizes="100vw"
				className={styles.heroImageDesktop}
				priority
			/>
		</section>
	);
}
