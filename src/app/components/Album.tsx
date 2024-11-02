// components/Album.tsx
"use client";

import { FaSpotify, FaApple, FaBandcamp } from "react-icons/fa";
import Image from "next/image";

type AlbumProps = {
	imageSrc: string;
	alt: string;
	spotifyLink: string;
	appleMusicLink: string;
	bandcampLink: string;
	albumTitle: string;
};

export function Album({
	imageSrc,
	alt,
	spotifyLink,
	appleMusicLink,
	bandcampLink,
	albumTitle,
}: AlbumProps) {
	return (
		<div className="album">
			<div className="album-image">
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
				<div className="overlay">
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
			<p>{albumTitle}</p>

			<style jsx>{`
				.album {
					position: relative;
					margin-bottom: 20px;
				}

				.album-image {
					position: relative;
					width: 100%;
					height: auto;
					overflow: hidden;
				}

				.album-image img {
					display: block;
					width: 100%;
					height: auto;
					transition: opacity 0.3s ease;
				}

				.overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, 0.6);
					opacity: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 20px;
					transition: opacity 0.3s ease;
				}

				.album-image:focus .overlay {
					opacity: 1;
				}

				.album-image:hover img {
					opacity: 0.5;
				}

				.overlay a {
					color: white;
					transition: transform 0.3s ease;
				}

				.overlay a:hover {
					transform: scale(1.2);
				}

				p {
					text-align: center;
					margin-top: 10px;
					font-size: 16px;
				}
			`}</style>
		</div>
	);
}
