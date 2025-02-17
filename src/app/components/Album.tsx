import { FaSpotify, FaApple, FaBandcamp } from "react-icons/fa";
import styles from "./Album.module.css";
import Image from "next/image";

type AlbumProps = {
	imageSrc: string;
	alt: string;
	spotifyLink: string;
	appleMusicLink: string;
	bandcampLink: string;
	albumTitle: string;
	priority?: boolean;
};

export function Album({
	imageSrc,
	alt,
	spotifyLink,
	appleMusicLink,
	bandcampLink,
	albumTitle,
	priority,
}: AlbumProps) {
	return (
		<div className={styles.album}>
			<div className={styles.albumImage}>
				<Image
					priority={priority}
					src={imageSrc}
					alt={alt}
					width={300}
					height={300}
					sizes="(max-width: 768px) 100vw, 700px"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
				<div className={styles.overlay}>
					<a
						href={spotifyLink}
						aria-label="Spotify"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaSpotify size={75} />
					</a>
					<a
						href={appleMusicLink}
						aria-label="Apple Music"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaApple size={75} />
					</a>
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
