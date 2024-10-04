import Image from "next/image";
import styles from "./Music.module.css";
import { Header, Footer } from "../components"; // Import the existing Header component

export default function MusicPage() {
	return (
		<>
			<Header />
			<div className={styles.titleContainer}>
				<div className={styles.titleContainer}>
					<h1 className={styles.pageTitle}>music</h1>
				</div>
			</div>

			{/* Grid of 6 album covers */}
			<div className={styles.gridContainer}>
				<div className={styles.gridItem}>
					<Image
						// Your image path
						src="/images/mourning-dove.jpg"
						alt="mourning dove"
						width={300}
						height={300}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<p>mourning dove [PRESAVE]</p>
				</div>

				<div className={styles.gridItem}>
					<Image
						// Your image path
						src="/images/mylove_heaventown.jpg"
						alt="my love is a painter/heaventown"
						width={300}
						height={300}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<p>my love is a painter/heaventown [2024]</p>
				</div>

				<div className={styles.gridItem}>
					<Image
						// Your image path2
						src="/images/america.jpg"
						alt="america (the song)"
						width={300}
						height={300}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<p>america (the song) [2024]</p>
				</div>

				<div className={styles.gridItem}>
					<Image
						// Your image path
						src="/images/humor-as-violence.jpg"
						alt="humor as violence"
						width={300}
						height={300}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<p>humor as violence (2024) [bandcamp only]</p>
				</div>

				<div className={styles.gridItem}>
					<Image
						// Your image path
						src="/images/christmas-ep.jpg"
						alt="christmas EP"
						width={300}
						height={300}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<p>christmas EP [2023]</p>
				</div>

				<div className={styles.gridItem}>
					<Image
						// Your image path
						src="/images/el-dirado.jpg"
						alt="el dirado"
						width={300}
						height={300}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<p>el dirado [2018]</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
