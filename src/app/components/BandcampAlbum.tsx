import { FaBandcamp } from "react-icons/fa";
import styles from "./BandcampAlbum.module.css";
import Image from "next/image";

type AlbumProps = {
	imageSrc: string;
	alt: string;
	bandcampLink: string;
	albumTitle: string;
};

export function BandcampAlbum({
	imageSrc,
	alt,
	bandcampLink,
	albumTitle,
}: AlbumProps) {
	// Use `typeof window !== "undefined"` to check for client-side rendering
	// if (typeof window !== "undefined") {
	// 	console.log("Variant 2: Application is on client side");
	// } else {
	// 	console.log("Variant 2: Application is on server side");
	// }

	return (
		<div className={styles.album}>
			<div className={styles.albumImage}>
				<Image
					src={imageSrc}
					alt={alt}
					width={300}
					height={300}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
				<div className={styles.overlay}>
					<a
						href={bandcampLink}
						aria-label="Bandcamp"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaBandcamp size={75} />
					</a>
				</div>
			</div>
			<p className={styles.albumTitle}>{albumTitle}</p>
		</div>
	);
}
